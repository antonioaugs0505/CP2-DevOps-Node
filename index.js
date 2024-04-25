const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Implantacao efetuada com sucesso. Bom trabalho!</h1>');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
