const net = require('net')

const echoServer = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('echoing: ', data.toString())
        socket.write(data.toString())
    })

})
console.log('Starting echo server on port 6000')
echoServer.listen(6000)