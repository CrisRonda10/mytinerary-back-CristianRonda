import express from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';
import carousel from '../controllers/cities/carousel.js';

let router = express.Router();
router.post('/', create)
router.get('/', read)
router.get('/carousel', carousel)
router.get('/:id', readOne)     //*los endpoints que lleven params VAN SIEMPRE AL FINAL (para q no me detecte la palabra (en el caso de arriba '/carousel') como este que tiene parametro configurado ('/:id'))
router.put('/:id', update)
router.delete('/:id', destroy)

export default router;