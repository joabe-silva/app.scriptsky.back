const db     = require('../config/databases');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');
require('dotenv').config();

exports.Login = {
    //Verifica token
    async verificaToken(req, res, next) {

        const token = req.headers['x-access-token'];

        const blacklist = `SELECT * FROM blacklist WHERE token='${ token }'`;
        const ret = await db.query(blacklist);

        //Verifica se o token foi inserido na blacklist. Ou seja o usuario fez logoff utilizando esse token.
        if(ret.rows === "") {
            //Verifica se o token ainda esta ativo
            jwt.verify(token, process.env.SECRET, (error, decoded) => {
                if(error) {
                    return res.json('Token invalido! Favor fazer login novamente.');
                } else {
                    return res.json('Token valido!');
                }
            });
        } else {
            res.json('Sua sessão inspirou! Favor fazer login novamente.');
        }

    },
    //Verifica JWT das requisições
    async verificaJWT(req, res, next) {

        const token = req.headers['x-access-token'];

        const blacklist = `SELECT * FROM blacklist WHERE token='${ token }'`;
        const ret = await db.query(blacklist);

        //Verifica se o token foi inserido na blacklist. Ou seja o usuario fez logoff utilizando esse token.
        if(ret.rows === "") {
            //Verifica se o token ainda esta ativo
            jwt.verify(token, process.env.SECRET, (error, decoded) => {
                if(error) return res.json('Token invalido! Favor fazer login novamente.');
                next();
            });
        } else {
            res.json('Sua sessão inspirou! Favor fazer login novamente.');
        }

    },
    //Login
    async login(req, res) {

        const entidade = "SELECT * FROM entidade WHERE email='"+req.body.email.trim()+"'";
        const usuario = await db.query(entidade);

        //Verifica se existe o email informado na base de dados
        if(usuario.rows != "") {
            //Verifica se o usuario esta ativo
            if(usuario.rows[0].situacao == 0) {

                if(bcrypt.compareSync(req.body.senha.trim(), usuario.rows[0].senha.trim())) {

                    //Gerando token de autenticacao com duracao de 10 minutos
                    const token = jwt.sign({ cod_entidade: usuario.rows[0].cod_entidade }, process.env.SECRET, { expiresIn: 3600 });
                    //Retornando token para o front da aplicacao
                    return res.json(token);

                } else {
                    return res.json('Senha incorreta!'); 
                }

            } else {
                return res.json('Usuário inativo. Contate o administrador!');
            }
        } else {
            return res.json('Usuario inexistente!');
        }

    },
    //Logoff
    async logoff(req, res) {

        //Inserindo token na blacklist
        const blacklist = "INSERT INTO blacklist(token) values ('"+req.headers['x-access-token']+"');"
        db.query(blacklist);

        return res.end();

    }

}