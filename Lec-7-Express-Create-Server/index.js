const express = require('express');

const port = 9090;

const app = express();

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    return res.render('home')
})

app.get('/about',(req,res)=>{
    return res.render('about')
})

app.get('/contact',(req,res)=>{
    return res.render('contact')
})

app.listen(port,(err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port:- http://localhost:${port}`);
    
})
