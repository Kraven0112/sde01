const http = require('http')
const hostName = '127.0.0.1'
const port = 2080

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.statusCode = 200
        response.setHeader('Content-Type', "text/plain")
        response.end("Hello server requesting done usccessfully")
    } else if (request.url === "/login") {
        response.statusCode = 200
        response.setHeader('Content-Type', "text/plain")
        response.end("Hello welcome to login page")
    } else if (request.url === "/register") {
        response.statusCode = 200
        response.setHeader('Content-Type', "text/plain")
        response.end("Hello register page opened.")
    }else if(request.url === "/homexxxxxxx") {
        response.statusCode = 200
        response.setHeader('Content-Type',"text/plain")
        response.end("Hello Welcome to home page.")
    } else{
        response.statusCode = 404
        response.setHeader('Content-Type', "text/plain")
        response.end("404 Not Found")
    }
})

server.listen(port, hostName, () => {
    console.log(`Server is running in http://${hostName}:${port}`)
})
