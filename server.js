const express = require('express')
const app= express();
const port = process.env.PORT || 4000;
const path =require('path');
var cors = require("cors");
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const  mongoose  = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const uri = 
// const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

const users = require('./routes/routes');
app.set("views", path.join(__dirname,"views"));
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/',users);
app.get('/',function(req,res){
    res.send('Test successful');
});

app.listen(port,function(){
    console.log('server started on '+port);
})