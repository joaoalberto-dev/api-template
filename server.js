// API de exemplo, sem dependências. Troque pelo que quiser (qualquer linguagem).
// O único contrato com o Dokku: escutar em 0.0.0.0:$PORT e responder em /health.
const http = require("node:http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Olá do Dokku 👋", version: process.env.GIT_REV || "dev" }));
});

server.listen(PORT, "0.0.0.0", () => console.log(`Escutando na porta ${PORT}`));

// Desligamento gracioso: o Dokku manda SIGTERM no container antigo após o deploy
process.on("SIGTERM", () => server.close(() => process.exit(0)));
