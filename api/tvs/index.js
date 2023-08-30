import express from 'express';
import { tvs, tvReviews, tvDetails } from './tvsData';
import uniqid from 'uniqid';
import tvModel from './tvModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingTvs, getTvGenres, getTvImages } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const tvs = await tvModel.find();
    res.status(200).json(tvs);
}));

// Get tv details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tv = await tvModel.findByTvDBId(id);
    if (tv) {
        res.status(200).json(tv);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get tv reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (tvReviews.id == id) {
        res.status(200).json(tvReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

//Post a tv review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (tvReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        tvReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingTvs = await getUpcomingTvs();
    res.status(200).json(upcomingTvs);
}));

router.get('/:id/images', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    const tvImages = await getTvImages(id);
    res.status(200).json(tvImages);
}));

router.get('/genres', asyncHandler( async(req, res) => {
    const tvGenres = await getTvGenres();
    res.status(200).json(tvGenres);
}));


export default router;
