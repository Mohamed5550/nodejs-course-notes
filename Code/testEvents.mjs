import EventListener from 'node:events'

const event = new EventListener();

event.on('order-shawrma', function(extras) {
    console.log(`New shawrma order with ${extras}`);
});

event.emit('order-shawrma', 'tomia');

export default event;