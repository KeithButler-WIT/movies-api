import express from 'express';
import Genre from './genreModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all genres
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

// Get genre by id
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const genre = await Genre.findByGenreDBId(id);
    if (genre) {
        res.status(200).json(genre);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

export default router;
