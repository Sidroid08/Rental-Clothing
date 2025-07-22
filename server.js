const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AD1832socj@l',
    database: 'rental_system'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.post('/signup', (req, res) => {
    const { name, email, password, address, phone } = req.body;
    const sql = 'INSERT INTO users (name, email, password, address, phone) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, password, address, phone], (err, result) => {
        if (err) throw err;
        res.send('User registered');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
