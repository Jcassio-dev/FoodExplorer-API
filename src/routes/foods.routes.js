const { Router } = require("express");

const FoodsController = require("../controllers/UsersController");

const foodsController = new FoodsController();
const foodsRoutes = Router();


foodsRoutes.post("/", foodsController.create);
foodsRoutes.put("/:id", foodsController.update);


module.exports = foodsRoutes;