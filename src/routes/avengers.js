import { Router } from "express";

import AvengersController from "../controller/avengersController.js";

const routes = new Router();

routes.get("/", AvengersController.getAll);
routes.get("/:id", AvengersController.getOneById);

export default routes;
