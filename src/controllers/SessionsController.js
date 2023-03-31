const { compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError")

class SessionsController{
    async create(request, response){
        const { email, password } = request.body;

        const user = await knex("users").where({email}).first();

        if(!user){
            throw new AppError("E-mail e/ou senha incorreta!");
        }
        
        const comparePassword = await compare(password, user.password);

        if(!comparePassword){
            throw new AppError("Email e/ou senha incorreta!");
        }

        return response.json(user)
    }
}

module.exports = SessionsController;