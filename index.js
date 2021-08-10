const { config } = require('dotenv');
const express = require ('express');

require('dotenv').config();

console.log(process.env.port);

// crear el servidor de express

const app = express();

// Directorio Publico

app.use( express.static('public'));



// Rutas

// app.get('/', (req,res)=>{

//     console.log('se requiere /')
//     res.json({
//         "ok":true
//     })
// });



// Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log( `Servidor corriendo en puerto ${process.env.PORT}` );
})
