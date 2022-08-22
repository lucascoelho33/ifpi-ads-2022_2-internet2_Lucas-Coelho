import { Request, Response } from "express";
var db = require('./database/db')
const User = require('./database/tabelas/usuario')

export class AuthController{
    public signup = async(req: Request, res: Response) => {
        await db.sync();
        const {email, name, password} = req.body

        const user = {email, name, password}

        const foundUser = await User.findOne({
            email: email
        })

        if (foundUser) {
            return res.status(409).json({error: "Já existe um usuário com este email!"})
        }

        // save into db
        const result = await this.users.insertOne(user)
    
        return res.status(200).json(result)
    }
    users: any;

    public signin = async (req: Request, res: Response) => {
        const {email, password} = req.body

        const foundUser = await User.findOne({
            email: email
        })

        if (!foundUser) {
            
            return res.status(401).json({error: "Usuário e/ou senha incorretos!"})
        }

        return res.json(foundUser)
    }
}


