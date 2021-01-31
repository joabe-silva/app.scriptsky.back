/*
const pg = require('pg');

const config = {
    host: '127.0.0.1',
    user: 'postgres',     
    password: 'AGzzcso1$',
    database: 'scriptsky',
    port: 5432,
    ssl: true
};

const conn = new pg.Client(config);

conn.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function createTableItem() {
    const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
        INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
        INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
        INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
    `;

    conn
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            conn.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}

createTableItem();


const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

const ItemSchema = new mongoose.Schema({
    titulo: {
       type: String 
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

ItemSchema.plugin(mongoosePaginate);

mongoose.model('Item', ItemSchema);

*/

