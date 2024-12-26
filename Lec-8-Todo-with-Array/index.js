const express = require('express');

const port = 9080;
const app = express();

app.set('view engine' , 'ejs');

app.use(express.urlencoded());

let record = [];

app.get('/' , (req , res) => {
    return res.render('table',{
        record
    })
})
app.get('/add',(req,res)=>{
    return res.render('form')
})
app.post('/adduser',(req,res)=>{
    const {userphone,username} = req.body;
    let obj = {
        name:username,
        phone:userphone
    }
    record.push(obj);
    console.log('user Successfully register');
    return res.redirect('/');
    
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`server is start on port:- http://localhost:${port}`);
})
