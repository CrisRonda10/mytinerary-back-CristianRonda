import {Router} from "express";
import read from "../controllers/activities/read.js";
const activitiesRouter = Router()

activitiesRouter.get('/', read)

export default activitiesRouter