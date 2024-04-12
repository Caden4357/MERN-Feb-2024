import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const Chat = (props) => {
    const {socket} = props;
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on('users_in_chat', (users) => {
            console.log(users);
            setUsers(users);
        });
        socket.on('messages', (messages) => {
            console.log(messages);
            setMessages(messages);
        });
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();
        socket.emit('new_message', message);
        setMessage("");
    }
    return (
        <div>
            <h1>Chat with anyone in the room</h1>
            <ul>
                {users.map((user, i) => (
                    <li key={i}>{user.username}</li>
                ))}
            </ul>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Message: </label>
                    <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
                </div>
                <input type="submit" value="Send" />
            </form>
            <ul>
                {messages.map((message, i) => (
                    <li key={i}>{message}</li>
                ))}
            </ul>
        </div>
)}

export default Chat;