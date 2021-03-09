const db = require("../config/databases");
const bcrypt = require('bcrypt');

exports.Entidade = {
    //Login
    async login(req, res) {

        const usuario = "SELECT email, senha, situacao, tipo FROM entidade WHERE email="+req.body.email.trim()+";"
        const usu = await db.query(usuario);

        if()

        return res.json('Entidade cadastrada com sucesso!');

    },
    //Logoff
    async logoff(req, res) {

        //Inserindo dados da entidade na base de dados
        const entidade = "INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+bcrypt.hashSync(req.body.senha, 8)+"', '"+req.body.situacao+"', '"+req.body.tipo+"');"
        db.query(entidade);

        return res.json('Entidade cadastrada com sucesso!');

    }
}