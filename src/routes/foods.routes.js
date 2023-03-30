const { Router } = require("express");

const FoodsController = require("../controllers/FoodsController");

const foodsController = new FoodsController();
const foodsRoutes = Router();


foodsRoutes.post("/", foodsController.create);
foodsRoutes.get("/:id", foodsController.show);
foodsRoutes.get("/", foodsController.index);
foodsRoutes.delete("/:id", foodsController.delete);
foodsRoutes.put("/:id", foodsController.update);

module.exports = foodsRoutes;