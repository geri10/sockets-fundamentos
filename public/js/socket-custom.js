var socket = io();

// escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Yerson',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
});