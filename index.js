const express = require('express');
const path = require('path');
const port =8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

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

    Contact.find({}, function(err,contacts){
        if(err){
            console.log('error in fetching contacts from db');
            return;
        }
        return res.render('home',{
            title:"Contacts List",
            contact_list: contacts
    }); 

    
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
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });

    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log('error in creating contact');
            return;
        }

        console.log('*********',newContact);
        return res.redirect('back');
    })


    // return res.redirect('/');
});

app.get('/delete-contact', function(req,res){
    let id = req.query.id;

    //find the contact in the database using id and delete
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from databse');
            return;
        }

        return res.redirect('back');
    });

   
    
});


//app.listen() to listen to the request

app.listen(port,function(err){
    if(err){
        console.log('error in running server');

    }
    console.log('my express server is running on port no:',port);
});