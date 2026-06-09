const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Node App</title>
      </head>
      <body>
        <h1>Hello from Node.js</h1>
        <p>This is an HTML page served by Node.</p>
      </body>
    </html>
  `);
});
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});