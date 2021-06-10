// Rutas para crear ussuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} =  require('express-validator'); // dentro de llaves, está un función de "express-validator"

//  Crea un usuario
//  api/usuarios
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un correo valido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caractéres').isLength({min: 6})
    ],
    usuarioController.crearUsuario
);
module.exports = router;

