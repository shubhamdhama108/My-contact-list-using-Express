const express = require('express');
const path = require('path');
const port =8000;

const app= express(); //app is used as naming convention.

// app.get() to return the response

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var contactList=[
    {
        name:'shubham',
        phone:1234
    },

    {
        name:'shubham',
        phone:1234
    },

    {
        name:'shubham',
        phone:1234
    }
]

app.get('/',function(req,res){
    // we dont need to set the content-type. it is automactically done my express
    // console.log(__dirname);
    return res.render('home',{
        title:"Conatcts List",
        contact_list:contactList
    }); //since we have to render from a file.

    // here instead of end() we use send().
});

app.get('/practice',function(req,res){
    return res.render('practice',
    {
        title:"my playground"
 
    });
});

app.post('/create_contact',function(req,res){
    contactList.push({
        name:req.body.name,
        phone:req.body.phone
    });


    return res.redirect('/');
});

app.get('/delete-contact', function(req,res){
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact =>contact.phone==phone);

    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
})


//app.listen() to listen to the request

app.listen(port,function(err){
    if(err){
        console.log('error in running server');

    }
    console.log('my express server is running on port no:',port);
});