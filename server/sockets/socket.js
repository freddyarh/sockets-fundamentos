const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje);

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {

        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }

    });
});