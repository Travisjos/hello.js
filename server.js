const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send('Hello, travis josh!');
});

app.get('/search', (req, res) => {
    const id = req.query.id;
    console.log(id);
    res.send('Hello, travis josh!');
});

app.get('/', (req, res) => {
    res.send('Hello, travis josh hacker!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
