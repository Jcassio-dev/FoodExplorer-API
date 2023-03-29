const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class FoodsController {
    async create(request, response){
        const {title, description, price, category, ingredients} = request.body;
    
        const checkFoodExists = await knex("foods").where({title}).first();

        if(checkFoodExists){
            throw new AppError("Esta comida já existe!", 401);
        }

        const [food_id] = await knex("foods").insert({
            title,
            description,
            price,
            category
        });

        if(ingredients.length > 0){
            const ingredientsInsert = ingredients.map(ingredient =>{
                return {
                    food_id,
                    name: ingredient
                }
            });

            await knex("ingredients").insert(ingredientsInsert)
        }

        return response.status(201).json("Prato criado!");
    }

    async show(request, response){
        const {id} = request.params;

        const food = await knex("foods").where({id}).first();
        const ingredients = await knex("ingredients").where({food_id: id}).orderBy("name")
        return response.json({
            ...food,
            ingredients
        });
    }
    async delete(request, response){
        const {id} = request.params;

        await knex("foods").where({id}).delete();

        return response.json("Prato excluído")
    }
}

module.exports = FoodsController;