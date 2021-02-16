const db = require("../config/databases");

exports.Entidade = {
    //Cadastra entidade
    async cadastroEntidade(req, res) {
        
        const entidade = "INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+req.body.senha+"', '"+req.body.situacao+"', '"+req.body.tipo+"');"
        db.query(entidade);

        return res.json('Entidade cadastrada com sucesso!');

    },
    //Edita entidade
    async editarEntidade(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de 
        const entidade = "SELECT * FROM entidade WHERE cod_entidade="+req.params.cod+";"
        var ret = await db.query(entidade);
    
        //Nome
        if(ret.rows[0].nome.trim() !== req.body.nome.trim()) {

            const entidade = "UPDATE entidade SET nome = '"+req.body.nome.trim()+"' WHERE cod_entidade = "+req.params.cod+";"
            db.query(entidade);

        }
        //Contato
        if(ret.rows[0].contato.trim() !== req.body.contato.trim()) {
            
            const entidade = "UPDATE entidade SET contato = '"+req.body.contato.trim()+"' WHERE cod_entidade = "+req.params.cod+";"
            db.query(entidade);

        }
        //Email
        if(ret.rows[0].email.trim() !== req.body.email.trim()) {

            const entidade = "UPDATE entidade SET email = '"+req.body.email.trim()+"' WHERE cod_entidade = "+req.params.cod+";"
            db.query(entidade);

        }
        //Senha
        if(ret.rows[0].senha.trim() !== req.body.senha.trim()) {

            const entidade = "UPDATE entidade SET senha = '"+req.body.senha.trim()+"' WHERE cod_entidade = "+req.params.cod+";"
            db.query(entidade);

        }
        //Situacao
        if(ret.rows[0].situacao !== req.body.situacao) {

            const entidade = "UPDATE entidade SET situacao = '"+req.body.situacao+"' WHERE cod_entidade = "+req.params.cod+";"
            db.query(entidade);

        }
        //Tipo
        if(ret.rows[0].tipo !== req.body.tipo) {

            const entidade = "UPDATE entidade SET tipo = '"+req.body.tipo+"' WHERE cod_entidade = "+req.params.cod+";"
            db.query(entidade);
            
        }
        
        return res.json('Dados da entidade atualizados com sucesso!');
        
    },
    //Retorna uma entidade especifica
    async entidade(req, res) {

        const entidade = "SELECT * FROM entidade WHERE cod_entidade="+req.params.cod+";"
        const ent = await db.query(entidade);

        return res.json(ent.rows);

    },
    //Retorna todas as entidades
    async entidades(req, res) {

        const entidade = "SELECT * FROM entidade ORDER BY nome ASC"
        const ent = await db.query(entidade);

        return res.json(ent.rows);

    }
  
};
