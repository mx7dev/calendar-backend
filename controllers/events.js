const   { response}= require('express');

const getEventos = ( req, res= response)=>{

    res.json({
        ok:true,
        msg:'getEventos'
    });
}

const crearEventos = ( req, res= response)=>{

    console.log( req.body);

    res.json({
        ok:true,
        msg:'crearEventos'
    });
}

const actualizarEvento = ( req, res= response)=>{
    res.json({
        ok:true,
        msg:'actualizarEvento'
    });
}

const eliminarEvento = ( req, res= response)=>{
    res.json({
        ok:true,
        msg:'eliminarEvento'
    });
}

module.exports ={
    getEventos,
    crearEventos,
    actualizarEvento,
    eliminarEvento
}