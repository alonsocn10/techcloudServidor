const Usuario = require('../models/usuariomdl'); 
const Cancion = require('../models/cancionmdl'); 
const tipoUsuariomdl = require('../models/tipoUsuariomdl');

module.exports = {

    index: async (req, res, next) => {
    
       const usuarios = await Usuario.find({});
       res.status(200).json(usuarios);
        
                
    },
    newUsuario: async (req, res, next) => {
        const newUsuario = new Usuario(req.body);
        const usuario = await newUsuario.save();
        res.status(200).json(usuario);

    },
    getUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const usuario = await Usuario.findById(usuarioId);
        res.status(200).json(usuario);

    },
    replaceUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const newUsuario = req.body;
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success : true});

    },
    updateUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        const newUsuario = req.body;
        const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
        res.status(200).json({success : true});

    },
    deleteUsuario: async (req, res, next) => {
        const { usuarioId } = req.params;
        await Usuario.findByIdAndRemove(usuarioId);
        res.status(200).json({success : true});

    },
    newSong: async (req, res, next) => {
        const { usuarioId } = req.params;
        const newSong = new Cancion(req.body);
        const usuario = await Usuario.findById(usuarioId);
        newSong.nomUsuario = usuario;
        await newSong.save();
        res.status(201).json(newSong);


    },
}