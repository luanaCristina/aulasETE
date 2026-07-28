import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('🎨 Feira Criativa Recife — Servidor TypeScript');
  console.log(`📍 Acesse: http://localhost:${PORT}`);
});
