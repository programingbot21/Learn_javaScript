import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8000;

const server = app.listen(port, () => {
    console.log('server is Listensing...');
});

const ws = new WebSocketServer({server});

ws.on("connection", (ws) => {
    ws.on('message', (data) => {
        console.log("data From client %s: ", data);
        ws.send('thanks buddy')
    });
});