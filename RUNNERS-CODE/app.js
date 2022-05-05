const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const mainRouter = require('./src/routers/main')
app.use('/', mainRouter)
    // view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});