const db = require("../config/databases");

exports.entidadeController = {
  
    async cadastroEntidade(req, res) {

        const ent = db.query("INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+req.body.senha+"', '"+req.body.situacao+"', '"+req.body.tipo+"');");
        return res.json('Entidade cadastrada com sucesso!');

    },
    async editarEntidade(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        var ret = await db.query("SELECT * FROM entidade WHERE cod_entidade="+req.params.cod+";");
    
        //Nome
        if(ret.rows[0].nome.trim() !== req.body.nome.trim()) {
            db.query("UPDATE entidade SET nome = '"+req.body.nome.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Contato
        if(ret.rows[0].contato.trim() !== req.body.contato.trim()) {
            db.query("UPDATE entidade SET contato = '"+req.body.contato.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Email
        if(ret.rows[0].email.trim() !== req.body.email.trim()) {
            db.query("UPDATE entidade SET email = '"+req.body.email.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Senha
        if(ret.rows[0].senha.trim() !== req.body.senha.trim()) {
            db.query("UPDATE entidade SET senha = '"+req.body.senha.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Situacao
        if(ret.rows[0].situacao !== req.body.situacao) {
            db.query("UPDATE entidade SET situacao = '"+req.body.situacao+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Tipo
        if(ret.rows[0].tipo !== req.body.tipo) {
            db.query("UPDATE entidade SET tipo = '"+req.body.tipo+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        
        return res.json('Dados atualizados com sucesso!');
    },
    async entidade(req, res) {

        const ent = await db.query("SELECT * FROM entidade WHERE cod_entidade="+req.params.cod+";");
        return res.json(ent.rows);

    },
    async entidades(req, res) {

        const ent = await db.query("SELECT * FROM entidade");
        return res.json(ent.rows);

    }
  
};
