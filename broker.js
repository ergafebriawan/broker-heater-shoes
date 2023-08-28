// MQTT broker
var mosca = require('mosca')
var settings = {
    port:1234
}
var broker = new mosca.Server(settings)

broker.on('ready', () => {
    console.log('Broker is ready!')
})

broker.on('clientConnected', (client) => {
    console.log('Client terhubung:', client.id);
});

broker.on('clientDisconnected', (client) => {
    console.log('Client terputus:', client.id);
});

broker.on('published', (packet) => {
    message = packet.payload.toString()
    console.log(message)
})

broker.on('error', (err) => {
    console.log('Error pada broker:', err);
  });