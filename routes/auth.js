import { Router } from "express";
import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import token from "../controllers/auth/token.js";
import signout from "../controllers/auth/signout.js";

import passport from "../middlewares/passport.js";
import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

let authRouter = Router()

authRouter.post('/register',validator(registerSchema),existsUser,isValidPass,register)
authRouter.post('/signin', validator(signinSchema), notExistsUser, isPassOk, isValidToken, signin)
authRouter.post('/token', passport.authenticate('jwt',{session:false}), isValidToken, token)
//*middleware para destokenizar el token (debe recibir un token y convertirlo en los datos del usuario)
//*middleware para generar un nuevo token (se puede pasar el mismo que para el login)
authRouter.post('/signout', passport.authenticate('jwt',{session:false}), signout)
export default authRouter



