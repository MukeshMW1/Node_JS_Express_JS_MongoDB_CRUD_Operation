const express = require('express');

const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://mukeshbhattampb111:sZeb0YLhTTwRT8xB@expressdb.mwipa.mongodb.net/express-API?retryWrites=true&w=majority&appName=ExpressDB').then(()=>{
    console.log("Connected to the database");
    app.listen(3000,()=>{
console.log('The server is listening at 3000');
    })
}).catch((err)=>{
console.log('There  was an error connecting to the database',err);
});