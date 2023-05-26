const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');


const Article = require('./articles/Article');
const Category = require('./categories/Category');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Database

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!');
    })
    .catch((error) => {
        console.log(error);
    });


    app.use('/', categoriesController);
    app.use('/', articlesController);

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000');
});

