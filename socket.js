const { io } = require("socket.io-client");

socket = io(process.env.SOCKET_URL);

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