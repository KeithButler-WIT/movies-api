import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData';
import uniqid from 'uniqid';
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingMovies, getMovieImages, getMovieReviews, getPopularMovies } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get movie reviews
// router.get('/:id/reviews', asyncHandler( async(req, res) => {
//     const id = parseInt(req.params.id);
//     const movie = await movieModel.findByMovieDBId(id);
//     if (movie.id == id) {
//         const movieReviews = await getMovieReviews(id);
//         res.status(200).json(movieReviews);
//     } else {
//         res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
//     }
// }));
// Get movie reviews
router.get('/:id/reviews', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (movieReviews.id == id) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

// router.get('/:id/reviews', asyncHandler( async(req, res) => {
//     const id = parseInt(req.params.id);
//     // const movieReviews = await movieReviews.find(id);
//     // find reviews in list
//     // if (movieReviews.id == id) {
//     const movieReviews = await getMovieReviews(id);
//     res.status(200).json(movieReviews);
// }));

//Post a movie review
router.post('/:id/reviews',  asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);

    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

// Delete movie reviews
router.delete('/:id/reviews', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    const movieReviews = await movieReviews.find(id);
    if (movieReviews.id == id) {
        movieReviews.deleteOne(movieReviews.id);
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
}));

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/:id/images', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
}));

router.get('/tmdb/popularMovies', asyncHandler( async(req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));


export default router;
