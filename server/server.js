// Server is a software which serves necessary stuffs for software development
// It can be used to serve static files like HTML, CSS, JS, Images etc.
// This code creates a simple HTTP server using Node.js that serves static files
// from the current directory. It listens on port 2000 and serves files based on the request URL.
// To run this code, save it in a file named server.js and run it using Node.js.
// Usage: node server.js

const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 2030

const server = http.createServer((req,res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)

    const extNmae = String(path.extname(filePath)).toLowerCase()

    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-sfnt'
    }

    const contentType = mimeTypes[extNmae] || 'application/octet-stream'

    fs.readFile(filePath, (err,content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.end('<h1>404 Not Found</h1>', 'utf-8')
            } else {
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`, 'utf-8')
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf-8')
        }
    })
})

server.listen(port, () => {
    console.log(`Server is running in port no ${port}`)
})