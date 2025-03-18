/*

- node js basic -> 

what is node js ? 
- javascript runtime built on chrome's v8 javascript engine (which is written in C++)
- server side javascript
- node js has power to run javascript out of browser
- developed by ryan dahl in 2009 -> he has wrapped v8 engine in js and created node js
- open source, cross platform, back end runtime environment
- used for building scalable network applications
- event driven, non blocking I/O model



- installing node and npm 
-> npm - node package manager - for installing node modules
-> node -v
-> npm -v
-> npm install -g nodemon ( for auto restart server )
-> nodemon -v
-> npm init  ( to create package.json file -> package.json file is used to store project dependencies )
-> npm init -y ( )

-> npm has no fullform now beacuse it was previously known as node package manager but now it is not only for node js packages

-> module - which is available in core node
-> package - which we are installing from npm

>> npm install packageNuNaam
>> npm install packageNuNaam@version
>> npm install packageNuNaam --save
>> npm install packageNuNaam --save-dev
>> npm install packageNuNaam --g
>> npm uninstall packageNuNaam

-> in package.lock.json file we can see the version of the package which we have installed
-> it hase depandenies of depancies also
-> in node_modules folder we can see the installed packages

-> dev dependencies - which are used in development only
-> dependencies - which are used in production also



- working with modules
-> two types of modules
1. cjs -> common js (require and module.exports)
2. es6 -> ecma script (import and export)


- working with file system
- working with http

*/

const fs = require("fs");
const http = require("http");


// fs.writeFile("hello.txt", "Hello World",(err)=>{
//     if(err) console.log(err);
//     else console.log("file created");
// });

// fs.appendFile("hey.txt", "Hello World",(err)=>{
//     if(err) console.log(err);
//     else console.log("file created");
// });

// fs.rename("hey.txt", "hello.txt",(err)=>{
//     if(err) console.log(err);
//     else console.log("file renamed");
// });

// fs.copyFile("hello.txt", "hello1.txt",(err)=>{
//     if(err) console.log(err);
//     else console.log("file copied");
// });

// fs.unlink("hello1.txt",(err)=>{ 
//     if(err) console.log(err);
//     else console.log("file deleted");
// });


/* 
protocols -> rules for internet , it is nessasary to follow these rules to communicate with each other on internet
-> riles are already installed in OS
http -> hyper text transfer protocol
https -> secure hyper text transfer protocol


*/

const server = http.createServer((req,res)=>{ 
    res.write("Hello World");
    res.end();
});

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});


/*

*/




