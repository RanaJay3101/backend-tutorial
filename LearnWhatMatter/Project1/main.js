/*
1. setup project and install express
2. setting up parser
3. install ejs and setting up ejs
4. setting up public static files
5. create a simple route
6. dynamic route


*/



import express from 'express';
import path from 'path';

const app =express();
const PORT = 3000;
//taking the current directory path
const __dirname = path.resolve();
// console.log(__dirname);

//setting up parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//setting up public static files
app.use(express.static(path.join(__dirname,"public")));

//setting up ejs
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/profile/:userName",(req,res)=>{
    let name = req.params.userName;
    res.send(`Welcome ${name}` );
});

app.get("/author/:author/:age",(req,res)=>{
    let author = req.params.author;
    let age = req.params.age;
    res.send(`Welcome ${author} your age is ${age}`);
});


app.listen(PORT,()=>{ 
    console.log(`server is running on port ${PORT}`);
});