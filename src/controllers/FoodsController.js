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

    async index(request, response){
        const {title, ingredients} = request.query;
        
        let foods;

        if(ingredients){
        const filterIngredients = ingredients.split(',').map(tag => tag.trim());

        foods = await knex("ingredients")
        .select([
            'foods.id',
            'foods.title'
        ])
        .whereLike("foods.title", `%${title}%`)
        .whereIn("title", filterIngredients)
        .innerJoin("foods", "foods.id", "ingredients.food_id")
        .orderBy("foods.title")
        } else {
            foods = await knex("foods")
            .whereLike("title", `%${title}%`)
        }
 
        const foodsIngredients = await knex("ingredients")
        const foodsWithIngredients = foods.map(food => {
            const foodIngredient = foodsIngredients.filter(ingredient => ingredient.food_id === food.id);


            return {
                ...food,
                ingredients: foodIngredient
            }
        })

        return response.json(foodsWithIngredients);
    }
    async update(request, response){
        const { title, description, price, category, ingredients} = request.body;
        const { id } = request.params;

        const food = await knex("foods").where({id}).first();
        
        if(!food){
            throw new AppError("Este prato não existe!")
        }

        food.title = title ?? food.title;
        food.description = description ?? food.description;
        food.price = price ?? food.price;
        food.category = category ?? food.category;

        await knex("foods").where({ id }).update(food);
        await knex("foods").where({ id }).update("updated_at", knex.fn.now());

        const ingredientsInsert = ingredients.map(ingredient => {
            return{
                food_id: id,
                name: ingredient,
            }
        })

        await knex("ingredients").where({food_id: id}).delete()
        await knex("ingredients").insert(ingredientsInsert)

        return response.json("Prato Atualizado!")
    }
}

module.exports = FoodsController;