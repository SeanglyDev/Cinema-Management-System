import express from 'express';
import type { Request, Response } from 'express';
import  './config/db'

const app = express();
const PORT = 3000;

app.use(express.json());


import authRouter from './routes/auth.route';
app.use('/api/auth', authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}🚀✅`);
});