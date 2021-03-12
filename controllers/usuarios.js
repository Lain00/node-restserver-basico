const { response, request } = require('express'); //para poder usar el status etc

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', page = 1, limit}  = req.query;  //gracias a la desestructuración se puede añadir facilmente valores por default en caso de no ser mandados

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q,
        nombre,
        page,
        limit
    });
}


const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}


const usuariosPut = (req, res = response) => {
    const id =  req.params.id; //para tomar el id de la url

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}