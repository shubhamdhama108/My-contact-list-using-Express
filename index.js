const express = require('express');
const path = require('path');
const port =8000;

const app= express(); //app is used as naming convention.

// app.get() to return the response

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    // we dont need to set the content-type. it is automactically done my express
    // console.log(__dirname);
    return res.render('home',{title:"shubham here"}); //since we have to render from a file.

    // here instead of end() we use send().
});


//app.listen() to listen to the request

app.listen(port,function(err){
    if(err){
        console.log('error in running server');

    }
    console.log('my express server is running on port no:',port);
})