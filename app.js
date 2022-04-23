let express = require("express");
const path = require("path");
let app = express();
app.use(express.static('public'));


app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html"))
});

