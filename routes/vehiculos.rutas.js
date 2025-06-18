const express = require('express');
const router = express.Router();
const vehiculos = require('../models/vehiculos'); // importo el modelo

router.get('/', async (req, res) => { // llamar toda los pots de la base de datos
    try {
        const vehiculos = await vehiculos.find();
        res.json(vehiculos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/:vehiculosId', async (req, res) => {
    try {
        const vehiculos = await vehiculos.findById(req.params.vehiculosId);
                res.json(vehiculos);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.post('/', async (req, res) => { // crear un post
     const post= new vehiculos({
        placa: req.body.placa,
        marca: req.body.marca,
        linea: req.body.linea,
        modelo: req.body.modelo
     });
        try {
        const savedvehiculos= await post.save();
        res.json(savedvehiculos);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.patch('/:postId', async (req, res) => { // actualizar un post
    try {
        const updatedvehiculos = await vehiculos.updateOne(
            { _id: req.params.vehiculosId }, { $set: { placa: req.body.placa,
        marca: req.body.marca,
        linea: req.body.linea,
        modelo: req.body.modelo } });
        res.json(updatedvehiculos);
    } catch (err) {
        res.json({ message: err.message });
    }
});
router.delete('/:vehiculosId', async (req, res) => { // eliminar un post
    try {
        const removedvehiculos = await vehiculos.findByIdAndDelete(req.params.vehiculosId);
        if(!removedvehiculos){
            return res.status(404).json({ message: 'Post no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: "Error de conexion" });
    }
});

module.exports=router; // exporto el router

