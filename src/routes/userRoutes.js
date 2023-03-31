import { Router } from "express";
import userController from "../controllers/userController.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import {userSchema} from "../schemas/User.js";
 
const userRoutes = Router();

userRoutes.post('/', validateSchema(userSchema),userController.signup);

export default userRoutes;