import express from 'express';

const app =express();

const PORT = 3000;


//middleware -> function that has access to request and response object
// -> it can execute any code

// jyare server request accept kre and je pn kaam route pahela karavu hoy and response pachi karavu hoy to middleware use karvu joiye
// app.use(middleware);
app.use((req,res,next)=>{
    console.log("middleware chala");
    next();
});

// beacuse of next() midleware go to next middleware

app.use((req,res,next)=>{
    console.log("middleware 2 chala");
    next();
});

//routing -> mapping of path to function
//app.get(path,callback(request,response),next);
app.get("/",(req,res,next)=>{
    res.send("Hello World");
    // return next(new Error("error occured"));
});

app.use((err,req,res,next)=>{
    // console.log(err);
    console.error(err.stack);
    res.status(500).send("error occured");
});

// running server on port
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})