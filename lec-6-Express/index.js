const express = require('express')

const port = 8080;

const app = express();

app.get('/', (req, res) => {
    res.write('Hello World')
    res.write('kemm chhoo...!')
    res.end()
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- http://localhost:${port}`);
})