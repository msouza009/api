const express = require('express');
const app = express();

app.post("/cadastro", function (req, res) {
    res.json({
        status: "OK",
        message: "Cadastrado com sucesso"
    })
});

app.get("/", function (req, res) {
    res.send("Hello World")
});

app.put("/cadastro/1", function (req, res) {
    res.json({
        status: "OK",
        message: "Editado com sucesso."
    })
})

app.listen(3000);