import express from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';
import validator from '../middlewares/validator.js';
import registerSchema from '../schemas/register.js';
import existsUser from '../middlewares/existsUser.js';
import isValidPass from '../middlewares/isValidPass.js';


let router = express.Router();
//*router.metodo('/', funcion)

//*Create
router.get('/', read)
router.post('/signup',validator(registerSchema),existsUser,isValidPass, create)
router.get('/:id', readOne)
router.put('/:id', update)
router.delete('/:id', destroy)
export default router;
