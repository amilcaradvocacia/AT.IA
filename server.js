const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AT.IA está no ar 🚀');
});

app.listen(port, () => {
  console.log(`AT.IA rodando na porta ${port}`);
});
