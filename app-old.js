const http = require('http');

http.createServer( ( req, res ) => {

    // res.writeHead(200, { 'Content-Type': 'text/plain' })

    res.write('Hola mundo');
    res.end();

})
.listen( 8080 );

console.log('Escuchando puerto 8080');