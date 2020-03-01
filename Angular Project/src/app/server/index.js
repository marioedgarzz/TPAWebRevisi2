var io = require('socket.io')(4300);

console.log('Server Started');

io.on('connection', function(socket) {
    console.log('User Connected');
    socket.on('chat', function(msg) {
        io.emit('chat', msg);
    });
    socket.on('train',function(msg) {
        io.emit('train',msg);
    });
    socket.on('hotel',function(msg) {
        io.emit('hotel',msg);
    });
});
