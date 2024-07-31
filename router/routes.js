import express  from "express";
import { homecontroller } from "../controller/homecontroller.js";
const routes = express.Router();

routes.get("/",homecontroller);
export default routes