--drop table entidade
--delete from entidade

--TABELA ENTIDADE
create table entidade (
	cod_entidade serial not null, 
	nome character(50), 
	contato character(14),

	email character(30),
	senha character(30), 
	situacao integer,
	tipo integer
);

/*insert into entidade(nome, cpf_ou_cnpj, contato, email, senha, situacao, tipo) values 
			('João', '987.922.755-14', '(85)99999-9999', 'joao@gmail.com', '123456', 0, 0)*/
			
select * from entidade


--TABELA ENDERECO
create table entidade_end (
	cod_endereco serial not null , 
	cod_entidade integer, 
	endereco character(50), 
	numero integer, 
	complemento character(30),
	bairro character(50), 
	cep character(9),
	cidade character(40),
	estado character(2)
);

/*insert into entidade_end(cod_entidade, endereco, numero, complemento, bairro, cep, cidade, estado) values 
						(1, 'Rua Santa Maria', 120, 'AP 03', 'Cristo Redentor', '60311-020', 'Fortaleza', 'CE')*/

select * from entidade_end

drop table pedido
--TABELA PEDIDO
create table pedido (
	cod_pedido serial not null, 
	cod_entidade integer, 
	valor_total character(50),
	desconto character(50),
	valor_liquido character(50),
	observacao character(100),
	data_criacao timestamp not null default current_timestamp,
	situacao integer
);

/*insert into pedido(cod_entidade, valor_total, desconto, valor_liquido, observacao, situacao) values (1, '50,99', '2,00', '49,97', 'Sem ovos no pão arabe', 0)*/

select * from pedido

--TABELA PEDIDO_ITEM
create table pedido_item (
	cod_pedido_item serial not null, 
	cod_pedido integer,
	cod_produto integer, 
	preco character(50),
	desconto character(50),
	quantidade integer,
	valor_total character(50),
	valor_liquido character(50)
);

/*insert into pedido_item(cod_pedido, cod_produto, preco, desconto, quantidade, valor_total, valor_liquido) values (1, 2, '1,50', '0,00', 2, '3,00', '3,00')*/

select * from pedido_item

--TABELA PRODUTO
create table produto (
	cod_produto serial not null, 
	imagem character(60),
	titulo character(80),
	descricao character(100),
	preco character(50), 
	desconto character(50),
	situacao integer
);

/*insert into produto (imagem, titulo, descricao, preco, desconto, situacao) values ('11111111111111.png', 'Pão Arabe', 'Pão arabe, Quijo, Presunto, Ovos, Frango Desfiado, Milho, Alface, Cebola e Tomate', '11,50', '0,00', 0)*/

select * from produto
