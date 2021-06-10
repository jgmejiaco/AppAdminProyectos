const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //  Leer el token del header
    const token = req.header('x-auth-token');

    //  Revisar si no hay token
    if(!token) {
        return res.status(401).json({msg: 'NO hay token, permiso no válido'})
    }

    //  Validar el token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        next(); // next a para buscar el sgte middleware, si lo hay

    } catch (error) {
        res.status(401).json({msg: 'Token no válido'});
    }
}