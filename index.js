const http = require("http");

const hostname = "127.0.0.1";
const port = 3002;
const express = require('express');
const cors = require('cors')
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
};

const app = express();
const server = http.createServer(app);


server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`)
});

app.use(cors(corsOptions));

const allPostsController = require("./routes/PostsRoute");

app.use("/", allPostsController);