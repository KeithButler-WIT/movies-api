import express from 'express';
import { shows, showReviews, showDetails } from './showsData';
import uniqid from 'uniqid';
import showModel from './showModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingShows } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const shows = await showModel.find();
    res.status(200).json(shows);
}));

// Get show details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const show = await showModel.findByShowDBId(id);
    if (show) {
        res.status(200).json(show);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get show reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (showReviews.id == id) {
        res.status(200).json(showReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

//Post a show review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (showReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        showReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingShows = await getUpcomingShows();
    res.status(200).json(upcomingShows);
  }));


export default router;
