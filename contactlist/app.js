var express= require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.send('foobar');
})

const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @27017');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error in database connection:' + err);
    }
})

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.listen(port,()=>{
    console.log('Server is running in the port: ' + port);
})