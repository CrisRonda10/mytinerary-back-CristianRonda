import { Router } from "express";
import read from "../controllers/itineraries/read.js";
import create from "../controllers/itineraries/create.js";
import update from "../controllers/itineraries/update.js";
import destroy from "../controllers/itineraries/destroy.js";

const itinerariesRouter = Router()

itinerariesRouter.get('/', read)
itinerariesRouter.post('/', create)
itinerariesRouter.put('/:id', update)
itinerariesRouter.delete('/:id', destroy)

export default itinerariesRouter