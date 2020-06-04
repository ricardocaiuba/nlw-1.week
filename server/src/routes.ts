import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
    response.json({
        message: "Hello Wold!"
    });
});

export default routes;
