const { Router } = require("express");

const FoodsController = require("../controllers/FoodsController");

const foodsController = new FoodsController();
const foodsRoutes = Router();


foodsRoutes.post("/", foodsController.create);


module.exports = foodsRoutes;