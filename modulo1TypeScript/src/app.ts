import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

// View engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rotas
app.use('/', routes);

export default app;
