const { Router } = require("express");

const FoodsController = require("../controllers/FoodsController");

const foodsController = new FoodsController();
const foodsRoutes = Router();


foodsRoutes.post("/", foodsController.create);
foodsRoutes.get("/:id", foodsController.show);
foodsRoutes.delete("/:id", foodsController.delete);

module.exports = foodsRoutes;