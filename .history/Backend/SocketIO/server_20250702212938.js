import { Server } from "socket.io";
import http from "http";
import express from "express";
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4001",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    
    socket.on("disconnect", () => {
        console.log("a user disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users));
    });

});