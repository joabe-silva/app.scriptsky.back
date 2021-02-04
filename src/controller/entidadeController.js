const db = require("../config/databases");

exports.entidadeController = {
  
    async cadastroEntidadeFuncionario(req, res) {

        console.log(req.body.nome, req.body.contato, req.body.email, req.body.senha, req.body.situacao, req.body.tipo)

        const result = await db.insertCustomer({nome: req.body.nome, contato: req.body.contato, email: req.body.email, senha: req.body.senha, situacao: req.body.situacao, tipo: req.body.tipo});
        //db.query("INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ("req.body.nome}", '(85)99999-9999', 'joabe@gmail.com', '123456', 0, 0);");
        return res.json(result + ': Cliente cadastrada com sucesso!');
    },
    async listaEntidades(req, res) {
        const result = db.query(
            "SELECT * FROM entidade"
        );

        return res.json('Entidade:'+(await result).rows.values);
    }
  
};
