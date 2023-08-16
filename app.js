//IMPORTS
import 'dotenv/config.js' //importo unicamente la configuracion de las variables de entorno
import __dirname from './utils.js'; //importo la configuracion de la ubicacion del servidor (antes, con commonjs, venia pre-configurada)
// var createError = require('http-errors');
import createError from 'http-errors'; //crear errores
// var express = require('express');
import express from 'express' //provee metodos y propiedades para levantar servidores
// var path = require('path');
import path from 'path' //para conocer la ubicacion de nuestro servidor
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import logger from 'morgan' //para registrar cada una de las peticiones
// var indexRouter = require('./routes/index'); //solo vamos a configurar las rutas del enrutador de back principal
import indexRouter from './routes/index.js'     //este enrutador va a llamar a todos los otros recursos (cities,itineraries,users)
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

let app = express(); //ejecutando el modulo de express: creo una app de backend (servidor)

// view engine setup
// set es el metodo necesario para set-ear (configurar) algo (motor de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES (funciones)
//USE es el metodo necesario para obligar a mi app a que use la funcion cada vez que se realiza una solicitud/peticion 
app.use(logger('dev')); //obligo al servidor a registrar una peticion con el modulo de logger/morgan
app.use(express.json()); //obligo al servido a manipular/leer json
app.use(express.urlencoded({ extended: false })); //obligo al servidor a leer params/queries
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //obligo al servidor a usar los archivos estaticos de la carpeta public

//ROUTER
app.use('/api', indexRouter); //obligo al servidor a que use las rutas del enrutador principal con "/api"

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app
