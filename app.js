//https://medium.com/developers-arena/nodejs-event-emitters-for-beginners-and-for-experts-591e3368fdd2.
const events = require('events');

const eventemitter = new events.EventEmitter();
eventemitter.on('myFirstEvent',()=>{
	console.log('my first event');
});
eventemitter.emit('myFirstEvent');