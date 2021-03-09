const db = require("../config/databases");
const bcrypt = require('bcrypt');

exports.Login = {
    //Login
    async login(req, res) {

        //Verifica se existe esse email na base de dados
        const entidade = "SELECT email, senha, situacao, tipo FROM entidade WHERE email='"+req.body.email.trim()+"'"
        const usuario = await db.query(entidade);
        //var msg = 'Vazio'

        if(usuario) {
            for(var prop in usuario) {
                if(usuario.hasOwnProperty(prop)) {
                    return 'Nao existe';
                }      
            }

            return 'Existe';
        }
        

        /*
        //Verifica se o usuário esta ativo
        if(usuario.rows[0].situacao == 0) {
            //Verifica se a senha informada é igual a senha armazenada no banco de dados
            if(bcrypt.compare(req.body.senha, usuario.rows[0].senha)){

                msg = 'Login realizado com sucesso.'

            } else {
                msg = 'Senha incorreta.'
            }
        } else {
            msg = 'Usuário inativo. Contacte o administrado.'
        }
        */
        return res.json(usuario.rows);

    },
    //Logoff
    async logoff(req, res) {

        //Inserindo dados da entidade na base de dados
        const entidade = "INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+bcrypt.hashSync(req.body.senha, 8)+"', '"+req.body.situacao+"', '"+req.body.tipo+"');"
        db.query(entidade);

        return res.json('Entidade cadastrada com sucesso!');

    }
}