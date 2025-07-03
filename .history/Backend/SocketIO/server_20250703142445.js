import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:4001", // ✅ frontend port
    methods: ["GET", "POST"],
  },
});

const users = {}; // userId -> socketId

export const getReceiverSocketId = (receiverId) => users[receiverId];
export { app, io, server };

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("✅ User connected:", userId, socket.id);

  if (userId) {
    users[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(users));
  }


  socket.on("typing", ({ receiverId }) => {
    const receiverSocketId = users[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("typing", {
        senderId: userId,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("❌ Disconnected:", socket.id);
    if (userId) {
      delete users[userId];
    }
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

