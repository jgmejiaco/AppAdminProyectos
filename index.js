const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//  Crear el servidor
const app = express();

//  Conectar a la base de datos
conectarDB();

//  Habilitar Cors
app.use(cors());

//  Habilitar express.json (Permite leer los datos ingresados en el formulario)
app.use(express.json({extended: true}));


//  Puerto de la App
const port = process.env.port || 4000;

//  Definir la página principal
app.get('/', (req, res) => {
    res.send('Hola Servidor con request')
});

//  Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//  Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})