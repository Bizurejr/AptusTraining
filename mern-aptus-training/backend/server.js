//We are defining all the things we are going to need in our server
const express = require('express');
const cors=require('cors');
const mongoose= require('mongoose');

require('dotenv').config(); //Enviroment variables

//This is how we are going to create our express server
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json()); //allows use to parse json

//URI we connect this from our mangodb atlas dashbord
// Our data is stored in the uri and this where our connection starts
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("MongoDB database connection established successfully");
})
//Before we use files, we have to require them
const exercisesRouter = require(./routes/exercises);
const usersRouter = require('./routes/users');
//on our page, if someone goes to the exrcises page, it will load everything in 
//the exercises file and vice versa
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => { //this starts the server
    console.log('Server is running on port: ${port}');
});