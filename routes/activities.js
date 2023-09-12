import {Router} from "express";
import read from "../controllers/activities/read.js";
import create from "../controllers/activities/create.js";
import destroy from "../controllers/activities/destroy.js";
import update from "../controllers/activities/update.js";

const activitiesRouter = Router()

activitiesRouter.get('/', read)
activitiesRouter.post('/', create)
activitiesRouter.delete('/:id', destroy)
activitiesRouter.put('/:id', update)

export default activitiesRouter