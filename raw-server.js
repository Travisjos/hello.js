const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Hello, travis josh hacker!'));

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    console.log(`Registering user: ${username}`);
    res.send(`User ${username} registered successfully!`);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Logging in user: ${username}`);
    res.send(`User ${username} logged in successfully!`);
});
app.get('/user/:id', (req, res) => {
    res.json({id: req.params.id, name: 'John Doe', email: 'john.doe@example.com'});
});
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
