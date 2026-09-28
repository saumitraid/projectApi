const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config({override:true, debug:false})
const app=express();
app.use(express.json());
// const mongoURI=process.env.MONGODB_URL;

const category=require('./routes/categoryRouter');

mongoose.connect("mongodb+srv://saumitraiddas:RQQcSaQcAuUj8Ara@cluster0.14etfqi.mongodb.net/mern89project").then(()=>{
    console.log('Mongodb connection established')
}).catch((err)=>{
    console.log('ERROR:'+err)
})

app.get('/', (req,res)=>{
    res.send('Hi, I am warking fine')
});
app.use('/category', category)

app.listen(3500, ()=>{console.log(`Server stated 3500`)});