var express = require('express');

var app = express();

app.get('/', function(req, res){  
   res.sendFile(__dirname+'/index.html')
})
app.get('/index.html', function(req, res){
   
   res.sendFile(__dirname+'/index.html')
    
})

app.get('/about.html', function(req, res){
       
   res.sendFile(__dirname+'/about.html')
    
})

app.post('/about.html', function(req, res){
   
   res.sendFile(__dirname+'/data.json')
    
})

app.get('/contact.html', function(req, res){
    
   res.sendFile(__dirname+'/contact.html')
    
})
app.get('/career.html', function(req, res){
  
   res.sendFile(__dirname+'/career.html')
    
})

app.listen(8080, function(){
    console.log("Server is Running on 8080...")
})