const mongoose = require('mongoose');
require('dotenv').config();

let configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

let MONGODB_URI = 'mongodb://localhost:27017/FloHorses'

//|| 'mongodb://localhost:27017/FloHorses'

//process.env.MONGODB_URI ||

mongoose.connect(MONGODB_URI, configOptions)
    .then(() => {
        console.log('Yayyy Database is connected');
    })
    .catch(() => {
        console.log('Something went wrong!');
    })