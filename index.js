const express=require('express');
const app=express();
const routes=require('./routes/routes');



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/url',routes)

app.set('view engine','ejs')





app.listen(3000,()=>{
    console.log('server running')
})
