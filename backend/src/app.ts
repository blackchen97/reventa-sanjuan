import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rutas
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend funcionando' });
});

// Exportar app
export default app;
