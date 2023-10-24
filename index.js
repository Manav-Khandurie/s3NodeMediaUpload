const express=require('express');
const app=express();
const port=process.env.PORT || 3333;
const routeUpload=require('./routes/routeUpload');

app.set('view engine', 'ejs');
app.set('views','views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Server is running on port ${port}`));

app.post("/upload",routeUpload);

app.get("/*" , (req,res,next)=>{
    res.render('homepage');
});
