const mongoose = require('mongoose');

const VehiculoSchema = mongoose.Schema({
    // Placa del vehículo 
    placa: {
        type: String,
        required: true,
        unique: true // Asegura que cada placa sea única
    },
    // Marca del vehículo 
    marca: {
        type: String,
        required: true
    },
    // Línea del vehículo 
    linea: {
        type: String,
        required: true
    },
    // Modelo del vehículo 
    modelo: {
        type: Number, // Usamos Number para el año
        required: true
    },
    // Fecha de registro del vehículo, se establece automáticamente
    date: {
        type: Date,
        default: Date.now
    }
});

// Exporta el modelo 'Vehiculo' basado en el esquema VehiculoSchema
module.exports = mongoose.model('Vehiculo', VehiculoSchema);
