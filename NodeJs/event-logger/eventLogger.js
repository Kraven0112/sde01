/*
Event drive is design paradigm where the flow of the program is controlled by the events, system occurence and other actions.

Logger is a module or tool in node js that monitors and records the behavior and event an application by providing the debugging, performance monitoring and auditing.
*/
const eventEmitter = require('events')
const eventLogger = new eventEmitter()

const onEvent = () => {
    console.log('Event has been triggered')
}

const message = eventLogger.on("message", onEvent)
console.log(message)