import { Router } from "express";
import avengersRoutes from "./avengers.js";

const routes = new Router();

routes.use("/avengers", avengersRoutes);

routes.get("/", (req, res) => {
  return res.json({ message: "Avengers estao em ação" });
});

export default routes;
