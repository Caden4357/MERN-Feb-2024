import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
const port = 8000;
const app = express();
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true
    }
})

let users = [];
let messages = [];
io.on('connection', (socket) => {
    console.log('New connection', socket.id);


    socket.on('new_user', (username) => {
        users.push({ id: socket.id, username });
        io.emit('users_in_chat', users);
    });

    socket.on('new_message', (message) => {
        console.log(message);
        messages.push(message);
        io.emit('messages', messages);
    });
});
