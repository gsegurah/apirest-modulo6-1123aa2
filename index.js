const express =require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const vehiculosRoute=require('./routes/vehiculos.rutas');//
app.use('/serviciosVehiculos', vehiculosRoute);
mongoose.connect('mongodb+srv://gseguraher:usNrHo15g1mbHBGM@cluster0.jicfvuv.mongodb.net/?retryWrites=true&w=majority&appName=cluster0',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const connection = mongoose.connection; // creo conexion a la base de datos
connection.once('open', () => {
    console.log('MongoDB conexion de base de datos establecida');
});

app.listen(3000);// puerto de escucha
