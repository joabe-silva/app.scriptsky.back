const db = require("../config/databases");

exports.EnderecoEntidade = {
    
    //Cadastra endereco entidade
    async cadastroEnderecoEntidade(req, res) {

        const enderecoEntidade = "INSERT INTO entidade_end (cod_entidade, endereco, numero, complemento, bairro, cep, cidade, estado) values ('"+req.body.cod_entidade+"', '"+req.body.endereco+"', '"+req.body.numero+"', '"+req.body.complemento+"', '"+req.body.bairro+"', '"+req.body.cep+"', '"+req.body.cidade+"', '"+req.body.estado+"');"
        db.query(enderecoEntidade);

        return res.json('Endereço da entidade cadastrado com sucesso!');

    },
    //Edita endereco entidade
    async editarEnderecoEntidade(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        const enderecoEntidade = "SELECT * FROM entidade_end WHERE cod_entidade="+req.params.cod+";"
        var ret = await db.query(enderecoEntidade);
    
        //Endereco
        if(ret.rows[0].endereco.trim() !== req.body.endereco.trim()) {
            db.query("UPDATE entidade_end SET endereco = '"+req.body.endereco.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Numero
        if(ret.rows[0].numero !== req.body.numero) {
            db.query("UPDATE entidade_end SET numero = '"+req.body.numero+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Complemento
        if(ret.rows[0].complemento.trim() !== req.body.complemento.trim()) {
            db.query("UPDATE entidade_end SET complemento = '"+req.body.complemento.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Bairro
        if(ret.rows[0].bairro.trim() !== req.body.bairro.trim()) {
            db.query("UPDATE entidade_end SET bairro = '"+req.body.bairro.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //CEP
        if(ret.rows[0].cep.trim() !== req.body.cep.trim()) {
            db.query("UPDATE entidade_end SET cep = '"+req.body.cep.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Cidade
        if(ret.rows[0].cidade.trim() !== req.body.cidade.trim()) {
            db.query("UPDATE entidade_end SET cidade = '"+req.body.cidade.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }
        //Estado
        if(ret.rows[0].estado.trim() !== req.body.estado.trim()) {
            db.query("UPDATE entidade_end SET estado = '"+req.body.estado.trim()+"' WHERE cod_entidade = "+req.params.cod+";");
        }

        return res.json('Endereço da entidade atualizado com sucesso!');
    },
    //Retorna endereco entidade
    async enderecoEntidade(req, res) {

        const enderecoEntidade = "SELECT * FROM entidade_end WHERE cod_entidade="+req.params.cod+";"
        const end = await db.query(enderecoEntidade);

        return res.json(end.rows);

    }
};
