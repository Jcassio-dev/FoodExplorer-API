const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class FoodsController {
    async create(request, response){
        const {title, description, price, category, ingredients} = request.body;
    
        
    }
}

module.exports = FoodsController;