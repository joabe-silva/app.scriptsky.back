const db = require('../config/databases');

exports.Parametro = {
    
    //Cria Parametro
    async cadastroParametro(req, res) {
 
        const parametro = "INSERT INTO parametro (imagem_loja, titulo_loja, descricao_loja, contato_loja, endereco_loja, numero_loja, complemento_loja, cep_loja, pedido_minimo_loja, frete, horario_ini_funcionamento_loja, horario_fim_funcionamento_loja, funcionamento_semana_seg, funcionamento_semana_ter, funcionamento_semana_qua, funcionamento_semana_qui, funcionamento_semana_sex, funcionamento_semana_sab, funcionamento_semana_dom, url_storage, url_complet) VALUES ('"+req.body.imagem_loja+"', '"+req.body.titulo_loja+"', '"+req.body.descricao_loja+"', '"+req.body.contato_loja+"', '"+req.body.endereco_loja+"', '"+req.body.numero_loja+"', '"+req.body.complemento_loja+"', '"+req.body.cep_loja+"', '"+req.body.pedido_minimo_loja+"', '"+req.body.frete+"', '"+req.body.horario_ini_funcionamento_loja+"', '"+req.body.horario_fim_funcionamento_loja+"', '"+req.body.funcionamento_semana_seg+"', '"+req.body.funcionamento_semana_ter+"', '"+req.body.funcionamento_semana_qua+"', '"+req.body.funcionamento_semana_qui+"', '"+req.body.funcionamento_semana_sex+"', '"+req.body.funcionamento_semana_sab+"', '"+req.body.funcionamento_semana_dom+"', '"+req.body.url_storage+"', '"+req.body.url_complet+"'"+");"
        db.query(parametro);
        
        return res.json('Parametros cadastrados com sucesso!');

    },
    //Edita Parametro
    async editarParametro(req, res) {

        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        var ret = await db.query("SELECT * FROM parametro");
        
        //Imagem 
        if(ret.rows[0].imagem_loja.trim() !== req.body.imagem_loja.trim()) {
            db.query("UPDATE parametro SET imagem_loja = '"+req.body.imagem_loja.trim()+"'");
        }
        //Titulo
        if(ret.rows[0].titulo_loja.trim() !== req.body.titulo_loja.trim()) {
            db.query("UPDATE parametro SET titulo_loja = '"+req.body.titulo_loja.trim()+"'");
        }
        //Descricao
        if(ret.rows[0].descricao_loja.trim() !== req.body.descricao_loja.trim()) {
            db.query("UPDATE parametro SET descricao_loja = '"+req.body.descricao_loja.trim()+"'");
        }
        //Contato
        if(ret.rows[0].contato_loja.trim() !== req.body.contato_loja.trim()) {
            db.query("UPDATE parametro SET contato_loja = '"+req.body.contato_loja.trim()+"'");
        }
        //Endereco
        if(ret.rows[0].endereco_loja.trim() !== req.body.endereco_loja.trim()) {
            db.query("UPDATE parametro SET endereco_loja = '"+req.body.endereco_loja.trim()+"'");
        }
        //Numero
        if(ret.rows[0].numero_loja.trim() !== req.body.numero_loja.trim()) {
            db.query("UPDATE parametro SET numero_loja = '"+req.body.numero_loja.trim()+"'");
        }
        //Completo
        if(ret.rows[0].complemento_loja.trim() !== req.body.complemento_loja.trim()) {
            db.query("UPDATE parametro SET complemento_loja = '"+req.body.complemento_loja.trim()+"'");
        }
        //CEP
        if(ret.rows[0].cep_loja.trim() !== req.body.cep_loja.trim()) {
            db.query("UPDATE parametro SET cep_loja = '"+req.body.cep_loja.trim()+"'");
        }
        //Pedido Minimo
        if(ret.rows[0].pedido_minimo_loja !== req.body.pedido_minimo_loja) {
            db.query("UPDATE parametro SET pedido_minimo_loja = '"+req.body.pedido_minimo_loja+"'");
        }
        //Frete
        if(ret.rows[0].frete !== req.body.frete) {
            db.query("UPDATE parametro SET frete = '"+req.body.frete+"'");
        }
        //Horario Inicio 
        if(ret.rows[0].horario_ini_funcionamento_loja !== req.body.horario_ini_funcionamento_loja) {
            db.query("UPDATE parametro SET horario_ini_funcionamento_loja = '"+req.body.horario_ini_funcionamento_loja+"'");
        }
        //Horario Fim
        if(ret.rows[0].horario_fim_funcionamento_loja !== req.body.horario_fim_funcionamento_loja) {
            db.query("UPDATE parametro SET horario_fim_funcionamento_loja = '"+req.body.horario_fim_funcionamento_loja+"'");
        }
        //Dias de Funcionamento
        //Segunda
        if(ret.rows[0].funcionamento_semana_seg !== req.body.funcionamento_semana_seg) {
            db.query("UPDATE parametro SET funcionamento_semana_seg = '"+req.body.funcionamento_semana_seg+"'");
        }
        //Terca
        if(ret.rows[0].funcionamento_semana_ter !== req.body.funcionamento_semana_ter) {
            db.query("UPDATE parametro SET funcionamento_semana_ter = '"+req.body.funcionamento_semana_ter+"'");
        }
        //Quarta
        if(ret.rows[0].funcionamento_semana_qua !== req.body.funcionamento_semana_qua) {
            db.query("UPDATE parametro SET funcionamento_semana_qua = '"+req.body.funcionamento_semana_qua+"'");
        }
        //Quinta
        if(ret.rows[0].funcionamento_semana_qui !== req.body.funcionamento_semana_qui) {
            db.query("UPDATE parametro SET funcionamento_semana_qui = '"+req.body.funcionamento_semana_qui+"'");
        }
        //Sexta
        if(ret.rows[0].funcionamento_semana_sex !== req.body.funcionamento_semana_sex) {
            db.query("UPDATE parametro SET funcionamento_semana_sex = '"+req.body.funcionamento_semana_sex+"'");
        }
        //Sabado
        if(ret.rows[0].funcionamento_semana_sab !== req.body.funcionamento_semana_sab) {
            db.query("UPDATE parametro SET funcionamento_semana_sab = '"+req.body.funcionamento_semana_sab+"'");
        }
        //Domingo
        if(ret.rows[0].funcionamento_semana_dom !== req.body.funcionamento_semana_dom) {
            db.query("UPDATE parametro SET funcionamento_semana_dom = '"+req.body.funcionamento_semana_dom+"'");
        }
        //URL Storage
        if(ret.rows[0].url_storage !== req.body.url_storage) {
            db.query("UPDATE parametro SET url_storage = '"+req.body.url_storage+"'");
        }
        //URL Complemento
        if(ret.rows[0].url_complet !== req.body.url_complet) {
            db.query("UPDATE parametro SET url_complet = '"+req.body.url_complet+"'");
        }

        return res.json('Parametros atualizados com sucesso!');

    },
    //Retorna todos os Parametros
    async parametro(req, res) {

        const parametro = await db.query("SELECT * FROM parametro");
        return res.json(parametro.rows)

    }

};
