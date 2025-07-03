









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

const users = {};

export const getReceiverSocketId = (receiverId) => users[receiverId];
export { app, io, server };

// ✅ Socket Logic
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
    console.log("👥 Users list:", users);
  }

  io.emit("getOnlineUsers", Object.keys(users));

  // ✅ Typing Indicator
  socket.on("typing", ({ receiverId }) => {
    const receiverSocketId = users[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("typing", { senderId: userId });
    }
  });

  // ✅ Disconnect
  socket.on("disconnect", () => {
    console.log("❌ Disconnected:", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

