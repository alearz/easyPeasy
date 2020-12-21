const http = require('http') //modulo nativo de nodemon el 'http' (no hace falta colocar rutas)

//console.log(http) 

http.createServer(function(req,res){ //emula y levanta el servidor
                           // 2 para metro req, res recibe
    res.writeHead(200,{"Content-Type":"text/plain;charse=utf-8"})

    switch (req.url) {
        case '/':
            res.end('Bienvenido a nuestro sitio web')
            break;
        case '/productos':
            res.end('Nuestro productos,es la mejor calidad!!')
            break
        case '/contacto':
            res.end('Dejanos tu mensaje y en breve seras atendido por un representante')
            break
        default:
            res.end('Esta pagina no está disponible')
            break;    
    } 
    res.end("Mi primer servidor en Node JS")
    
}).listen(3030,'localhost',()=>console.log('Servidor funcionando en el puerto 3030')) // callback
   //listen coloca en escucha el servidor y levanta el servidor
   // como es local, colocamos 'localhost'
   