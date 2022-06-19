const { io } = require("socket.io-client");

socket = io('ws://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to IS Monitor');
})

socket.on('disconnect', () => {
    console.log('Disonnected from IS Monitor');
})

socket.on('reconnect', () => {
    console.log('Reconnecting to IS Monitor');
})


module.exports = socket