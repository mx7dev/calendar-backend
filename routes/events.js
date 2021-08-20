/*
    Event Routes
    /api/events
*/

const {Router} = require('express');
const {  check} = require('express-validator')
const { getEventos, crearEventos, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router =Router();

// Todas tienes que pasar por la validacion del JWT

router.use(validarJWT);

// obtener eventos
router.get('/',getEventos);

 
// Crear un nuevo evento
router.post('/', [
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate),
    check('end','Fecha de finalización es obligatoria').custom( isDate),
    validarCampos
],crearEventos);

// ACtualizar evento
router.put('/:id',actualizarEvento);

// Borrar evento
router.delete('/:id',eliminarEvento);

module.exports =router;