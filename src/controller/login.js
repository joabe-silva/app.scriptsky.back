const db     = require('../config/databases');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');
const SECRET = 'ScriptskyAGzzcso@1$';



exports.Login = {
    //Verifica token do usuario
    async verificaJWT(req, res, next) {

        const token = req.headers['x-access-token'];
    
        jwt.verify(token, SECRET, (error, decoded) => {
    
            if(error) return res.json('Token invalido!');
            const cod_entidade = decoded.cod_entidade;
    
            next();
        });
    
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

                    //Gerando token de autenticacao com duracao de 2 minutos
                    const token = jwt.sign({ cod_entidade: usuario.rows[0].cod_entidade }, SECRET, { expiresIn: 120 });
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

        //Inserindo dados da entidade na base de dados
        const entidade = "INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+bcrypt.hashSync(req.body.senha, 8)+"', '"+req.body.situacao+"', '"+req.body.tipo+"');"
        db.query(entidade);

        return res.json('Entidade cadastrada com sucesso!');

    }

}