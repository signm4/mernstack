const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use("/books", router);
app.use(cors());
// app.use('/',(req,res,next)=> {
//     res.send("This is our starting app")
// })

mongoose.connect('mongodb+srv://admin:admin@cluster0.mfhgfxi.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("connected to Database"))
.then(() => {
    app.listen(5000)
}).catch((err)=> console.log(err));

console.log("Hello World!!");