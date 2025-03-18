// Notes taking app

import express from 'express';
import path from 'path';
import fs from 'fs';

const app =express();
const PORT = 3000;
const __dirname = path.resolve();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        if(err) console.log(err);
        else{
            res.render("index",{files:files});
        }
    });
});

app.post("/create",(req,res)=>{
    console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}`, req.body.task,(err)=>{
        if(err) console.log(err);
        else{
            res.redirect("/");
        }
    });
});

app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,data)=>{
        if(err) console.log(err);
        else{
            res.render("show",{data:data});
        }
    });
});


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});