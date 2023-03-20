const {hash, compare} = require("bcryptjs")
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersController {
 async create(request, response){
    const {name, email, password} = request.body

    const checkUserExist = await knex("users").where({email}).first();
    if(checkUserExist){
      throw new AppError("O e-mail já está em uso", 401);
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    })
    
    response.json();
 }
}

module.exports = UsersController;