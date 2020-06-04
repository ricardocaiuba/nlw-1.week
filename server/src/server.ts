import express from "express";

const app = express();

app.get("/users", (request, response) => {
    console.log("Listagem de usuários");
    response.json([
        "Ricardo",
        "Rodrigues",
        "dos",
        "Santos",
        "-",
        "Developer"
    ]);
});

app.listen(3333);
