import { Router } from "express";
import Usercontrollers from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductsController from "./app/controllers/ProductsController";
import multer from "multer";
import multerConfig from "./config/multer"

const upload = multer(multerConfig);
const routes = new Router();


routes.post('/user', Usercontrollers.store)
routes.post('/session', SessionController.store)
routes.post('/products', upload.single('file'), ProductsController.store)



export default routes;


