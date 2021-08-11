const { config } = require('dotenv');
const express = require ('express');
const { dbConnection } = require('./database/config');
const cors = require ('cors');

require('dotenv').config();

console.log(process.env.port);

// crear el servidor de express

const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());


// Directorio Publico
app.use( express.static('public'));


// Lectura y parseo del body
app.use(express.json());


// Rutas
app.use('/api/auth',require ('./routes/auth'));

//TODO: CRUD: Eventos





// Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log( `Servidor corriendo en puerto ${process.env.PORT}` );
})
