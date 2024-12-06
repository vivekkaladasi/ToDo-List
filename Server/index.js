
 
 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors')
 const TodoModel = require('./Models/Todo')
 const PORT = 3000;

 const app = express();
 app.use(cors())
 app.use(express.json())

mongoose.connect('mongodb+srv://kaladasivivek9493:Nrp6NhiNtsHS0a4c@tasks.fuuux.mongodb.net/?retryWrites=true&w=majority&appName=tasks')

app.get('/get' , (request,response) =>{
    TodoModel.find()
    .then(result => response.json(result))
    .catch(error => response.json(error))
})

app.put('/update/:id' , (request,response) =>{
    const{id} = request.params;
    TodoModel.findByIdAndUpdate({_id:id} ,{done:true} )
    .then(result => response.json(result))
    .catch(error => response.json(error))
})  
 app.post('/add', (request, response) => {
    const task = request.body.task;
    TodoModel.create({
        task:task
    }).then(result => response.json(result))
    .catch(error => response.json(error))
});
app.delete('/delete/:id',(request, response ) =>{
    const{id} =request.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result=> response.json(result))
    .catch(error => res.json(error))
})
 app.listen(PORT, ()=>{
    console.log("server is connected")
    
 })
 app.get('/')