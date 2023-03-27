# Node Echo Server

Simple implementation of the [echo Protocol](https://www.rfc-editor.org/rfc/rfc862)

## How to get running

`docker build .`

`docker run -p 6000:6000 <imageID>`

## Test the server

You can test the server using netcat

Connect with `nc localhost 6000`

Write anything and send with Enter, the server will reply with an echo