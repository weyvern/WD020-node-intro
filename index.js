import http from 'http';

const port = 8080;

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello there (General Kenobi)');
};

const server = http.createServer(requestListener);
server.listen(port, () => console.log(`Server started listening on port ${port}`));
