const express = require('express');
const app = express();

app.get('/', (req,res) =>
{
    res.send('Hola Mundo desde Salumvid');
})

app.listen(8080,() =>
    {
        console.log("Servidor escuchando en el puerto 8080");
    })