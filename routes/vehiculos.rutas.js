const express = require('express');
const router = express.Router();
const Vehiculos = require('../models/Vehiculos'); // importo el modelo

router.get('/', async (req, res) => { // llamar toda los pots de la base de datos
    try {
        const posts = await Vehiculos.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/:postId', async (req, res) => {
    try {
        const post = await Vehiculos.findById(req.params.postId);
                res.json(post);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.post('/', async (req, res) => { // crear un post
     const post= new Vehiculos({
  placa: req.body.placa,
  marca: req.body.marca,
  linea: req.body.linea,
  modelo: req.body.modelo
     });
        try {
        const savedPost= await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.patch('/:postId', async (req, res) => { // actualizar un post
    try {
        const updatedPost = await Vehiculos.updateOne(
            { _id: req.params.postId }, { $set: { 
  placa: req.body.placa,
  marca: req.body.marca,
  linea: req.body.linea,
  modelo: req.body.modelo
} });
        res.json(updatedVehiculos);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.delete('/:postId', async (req, res) => { // eliminar un post
    try {
        const removedVehiculos = await Vehiculos.findByIdAndDelete(req.params.postId);
        if(!removedPost){
            return res.status(404).json({ message: 'Post no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: "Error de conexion" });
    }
});
module.exports=router; // exporto el router
