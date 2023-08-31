import express from 'express';
import { persons, personReviews, personDetails } from './personsData';
import uniqid from 'uniqid';
import personModel from './personModel';
import asyncHandler from 'express-async-handler';
import { getActorImages, getCombinedCredits } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const persons = await personModel.find();
    res.status(200).json(persons);
}));

// Get person details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const person = await personModel.findByPersonDBId(id);
    if (person) {
        res.status(200).json(person);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/images/', asyncHandler( async(req, res) => {
    const actorImages = await getActorImages();
    res.status(200).json(actorImages);
}));

router.get('/:id/combinedCredits', asyncHandler( async(req, res) => {
    const id = parseInt(req.params.id);
    const actorImages = await getCombinedCredits(id);
    res.status(200).json(actorImages);
}));

export default router;
