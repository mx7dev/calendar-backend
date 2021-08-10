const express = require ('express');

const crearUsuario = (req,res)=>{

    console.log('se requiere /')
    res.json({
        ok:true,
        msg:'registro'
    })
}
const loginUsuario= (req,res)=>{

    console.log('se requiere /')
    res.json({
        ok:true,
        msg: 'login'
    })
}
const revalidarToken= (req,res)=>{

    console.log('se requiere /')
    res.json({
        ok:true,
        msg:'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};