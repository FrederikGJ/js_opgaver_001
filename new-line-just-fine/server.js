const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hej Verden!');
});

app.listen(3050, () => {
    console.log('Server kører på http://localhost:3050');
});
