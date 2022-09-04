import { NextFunction, Request, Response } from "express";
var db = require('../database/banco')
const Usuario = require('../database/tabela/usuario')
const UsuarioToken = require('../database/tabela/usuarioToken')

export class authController{
    public signup = async (req: Request, res: Response) => {
        await db.sync()
        const {login, name, password, telefone} = req.body

        const foundUsuario = await Usuario.findOne({
            login: login
        })

        if (foundUsuario) {
            return res.status(409).json("Já existe um usuário com este email.")
        }
    }

    public signin = async (req: Request, res: Response) => {
        const {login, password} = req.body;

        const foundUsuario = await Usuario.findOne({
            login: login
        })

        if (!foundUsuario) {
            return res.status(401).json({error:"Usuario e/ou senha Incorretos"})
        }

        return res.json(foundUsuario)
    }
}