const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet); //no se esta ejecutando () solo se esta mandando la referencia

router.post('/', usuariosPost);

router.put('/:id', usuariosPut); //el id express lo maneja y parese y lo da en una variable

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;