const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario =  async (req,res = response)=>{

    const { email, password }  = req.body;


    try {
        let usuario = await  Usuario.findOne({email:email});

        if ( usuario) {
            return res.status(400).json({
                ok:false,
                msg:'Un usuario existe con ese correo'
            });
        }    


        usuario = new Usuario(req.body);
        
        const salt = bcrypt.genSaltSync();
        usuario.password= bcrypt.hashSync(password,salt); 

        await usuario.save();

        // Generar JWT

        const token = await generarJWT(usuario.id, usuario.name);


        res.status(201).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el administrador'
        })
    }
    
}
const loginUsuario= async (req,res = response)=>{

    
    const { email,password } = req.body;

    try {

        let usuario = await  Usuario.findOne({email:email});

        if ( !usuario) {
            return res.status(400).json({
                ok:false,
                msg:'el usuario no existe con este email'
            });
        }    

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);
        
        if ( !validPassword){
            return res.status(400).json({
                ok:false,
                msg:'Password incorrecto'
            })
        }

        // generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'por favor hable con el administrador'
        });
    }

    res.json({
        ok:true,
        msg: 'login',
        email,
        password
        
    })
}
const revalidarToken= async (req,res = response)=>{

    const { uid,name } = req;
    

    const token = await generarJWT(uid, name);
    
    res.json({
        ok:true,
        token,
        uid,
        name
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};