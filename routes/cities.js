import express from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';

let router = express.Router();
router.post('/', create)
router.get('/', read)
router.get('/:id', readOne)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router;