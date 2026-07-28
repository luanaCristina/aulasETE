import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('💇 Salão Beleza & Arte — TypeScript API');
  console.log(`📍 http://localhost:${PORT}`);
});
