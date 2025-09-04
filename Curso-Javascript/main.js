const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('app.get acaba de ejecutarse y decir esto');
})

app.listen(3000, () =>{
    console.log("servidor escuchando puerto 3000");
});