import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/Modules/Student/student.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Application Routes

app.use('/api/v1/students', StudentRoutes);

const getACoontroller = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getACoontroller);

export default app;
