const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);
// app.use('/',(req,res,next)=> {
//     res.send("This is our starting app")
// })

mongoose.connect('mongodb+srv://user:<password>@cluster0.mfhgfxi.mongodb.net/?retryWrites=true&w=majority') 
// for the above connection, change user with user and password with password
.then(()=>console.log("connected to Database"))
.then(() => {
    app.listen(5000)
}).catch((err)=> console.log(err));

console.log("Hello World!!");