const express = require('express');
const port =8000;

const app= express(); //app is used as naming convention.

// app.get() to return the response

app.get('/',function(req,res){
    // we dont need to set the content-type. it is automactically done my express
    res.send('<h1>hi i think the page is rendered</h1>'); 

    // here instead of end() we use send().
});


//app.listen() to listen to the request

app.listen(port,function(err){
    if(err){
        console.log('error in running server');

    }
    console.log('my express server is running on port no:',port);
})