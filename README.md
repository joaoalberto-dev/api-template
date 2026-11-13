# api-template

Modelo de API para deploy no Dokku via [`vps-infra`](https://github.com/joaoalberto-dev/vps-infra).

Pode ser **qualquer linguagem**. O contrato é só este:

1. Ter um `Dockerfile` na raiz.
2. A app escuta em `0.0.0.0:5000` (ou em `$PORT`).
3. Responde `200` em `/health`, que é o healthcheck usado no zero-downtime (veja `app.json`).
4. O `app.json` é copiado para o `WORKDIR` da imagem, que é onde o Dokku procura.

Se a sua API usar outra porta, passe essa porta no `create-app.sh` (3º argumento) e ajuste o `app.json`.

## Rodar local

```bash
docker build -t minha-api . && docker run --rm -p 5000:5000 minha-api
curl localhost:5000/health
```

## Deploy

Push na `main` → GitHub Actions → produção. Também dá pra disparar manualmente em *Actions → Deploy → Run workflow*.
