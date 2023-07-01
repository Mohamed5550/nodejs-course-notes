# Built in modules

## Path modules

- parse
- isAbsolute
- join
- resolve

## Callback pattern

- You can pass functions as parameters

## Events module

- import "node:events" as EventEmittter
- `const event = new EventEmitter()`
- `event.emit('event-name', ...params)` to call event
- `event.on('event-name', callback)` to listen to event
- You can extend the EventEmitter behavior

## Character Encoding

## Streams and Buffers

- streams send data in chunks rather than sending it at one time
- buffers is the chunks of data being sent

## FS Module

## Promise module

## ٍStreams

- Readable streams
- Writable streams
- Duplix streams
- Transform streams

## HTTP Module

- import http
- http.createServer
- http.listen(`$port`)
- send json with `Content-Type: "application/json"`
- send html with `Content-Type: "text/html"`
- you can route with `req.url`
