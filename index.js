const express = require('express');
const app = express();
const crypto = require('crypto');

// function doWork(duration) {
//     const start = Date.now();
//     while(Date.now() - start < duration) {}
// }

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hi there');
    });
});

console.log('starting node listening to 3000');
app.listen(3000);