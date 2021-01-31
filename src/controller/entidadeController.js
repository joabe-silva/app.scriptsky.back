const db = require("../config/databases");

exports.entidadeController = {
  
    async cadastroEntidade(req, res) {
        db.query(
            "INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('Joabe Silva', '(85)99999-9999', 'joabe@gmail.com', '123456', 0, 0);"
        );
        
        return res.json('Entidade cadastrada com sucesso!');
    },
    async listaEntidades(req, res) {
        const result = db.query(
            "SELECT * FROM entidade"
        );

        return res.json('Entidade: '+valores);
    }
  
};
