/*
form handeling in express js

what is session and cookie ? 

- session: session is a way to store information about the user across multiple pages ( login require session )
- session is stored on server side
- cookie: cookie is a small piece of data that is stored in the user's browser

blob -> is a binary large object is format for storing binary data
*/

import express from 'express';

const app =express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});