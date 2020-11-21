const express = require('express');
const  app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const hbs = require('hbs');
const staticPath = path.join(__dirname,'../publicdir');
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',viewPath);
app.use(express.static(staticPath));
hbs.registerPartials(partialPath);

app.get('/',(req,res)=> {
    res.render('index');
});


app.get('/about',(req,res)=> {
   res.render('about');
});

app.get('/weather',(req,res)=> {
    res.render('weather');
});

app.get('*',(req,res)=>{
    res.render('404');

});

app.listen(port,()=>{
    console.log(`the server is listening port ${port}`);
});
