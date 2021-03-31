const db = require('../config/databases');

exports.ParametroFormaPagamento = {
    
    //Cria Parametro Forma Pagamento
    async cadastroParametroFormaPagamento(req, res) {

        const parametroFormaPagamento = "INSERT INTO parametro_forma_pagamento (descricao, status) VALUES ('"+req.body.descricao+"', '"+req.body.status+"'"+");"
        db.query(parametroFormaPagamento);
        
        return res.json('Parametros Forma Pagamento cadastrados com sucesso!');

    },
    //Edita Forma Pagamento
    async editarParametroFormaPagamento(req, res) {

        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        const parametroFormaPagamento = "SELECT * FROM parametro_forma_pagamento WHERE cod_parametro_forma_pagamento="+req.params.cod+";"
        const ret = await db.query(parametroFormaPagamento);

        //Descricao
        if(ret.rows[0].descricao.trim() !== req.body.descricao.trim()) {
            db.query("UPDATE parametro_forma_pagamento SET descricao = '"+req.body.descricao.trim()+"'");
        }
        //Status
        if(ret.rows[0].status !== req.body.status) {
            db.query("UPDATE parametro_forma_pagamento SET status = '"+req.body.status+"'");
        }
        
        return res.json('Parametros Forma Pagamento atualizados com sucesso!');

    },
    //Retorna todos as Formas de Pagamento
    async parametroFormasPagamento(req, res) {

        const parametroFormaPagamento = await db.query("SELECT cod_parametro_forma_pagamento, descricao FROM parametro_forma_pagamento WHERE status = 0");
        return res.json(parametroFormaPagamento)

    }

};
