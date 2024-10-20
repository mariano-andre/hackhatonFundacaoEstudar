const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota para obter dados do JSON
app.get('/api/itens', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o arquivo.' });
    }
    res.json(JSON.parse(data));
  });
});


// Rota para buscar elementos específicos
app.get('/api/buscar', (req, res)  => {
    const  {nome} = req.query;
    
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ erro: 'Erro ao ler o arquivo.' });
        }
      
        console.log("Conteúdo lido do JSON:", data);
      
        let itens;
        try {
            itens = JSON.parse(data);
        } catch (parseError) {
            return res.status(500).json({ erro: 'Erro ao analisar o JSON.' });
        }
        
        // Filtra os itens pelo nome
        const itensFiltrados = itens.filter(item => {
            return item.nome_popular.toLowerCase().includes(nome.toLowerCase()) || item.nome_cientifico.toLowerCase().includes(nome.toLowerCase());
        });
      
        res.json(itensFiltrados);
      });      
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
