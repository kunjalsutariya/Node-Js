const express = require('express');

const port = 8080;

const app = express();

app.set('view engine', 'ejs');


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port ${port}`)
})

