const db = require('../config/databases');

//onst localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const passport = require('passport');
const session = require('express-session')

exports.Login = {
    //Login
    async login(req, res) {

        const entidade = "SELECT * FROM entidade WHERE email='"+req.body.email.trim()+"'"
        const usuario = await db.query(entidade);

        //Verifica se existe o email informado na base de dados
        if(usuario.rows != "") {
            //Verifica se o usuario esta ativo
            if(usuario.rows[0].situacao == 0) {

                if(bcrypt.compareSync(req.body.senha.trim(), usuario.rows[0].senha.trim())) {

                    passport.serializeUser((usuario, done) => {
                        done(null, usuario.rows[0].cod_entidade);
                    })

                    return res.json('Login realizado com sucesso!');

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

        //Inserindo dados da entidade na base de dados
        const entidade = "INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+bcrypt.hashSync(req.body.senha, 8)+"', '"+req.body.situacao+"', '"+req.body.tipo+"');"
        db.query(entidade);

        return res.json('Entidade cadastrada com sucesso!');

    }

}