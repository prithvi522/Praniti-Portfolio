# Portfolio backend

This is the Express API for the portfolio application.

## Setup

```bash
npm install
copy .env.example .env
npm run dev
```

On macOS or Linux, use `cp .env.example .env` instead of `copy`.

The server listens on `http://localhost:5000` by default. Set `PORT` in
`.env` to use another port.

## Available endpoints

- `GET /api/health` - returns the API health status
