import express from 'express';
import path from 'path';

const app = express();

const PORT = 5000;
const __dirname = path.resolve();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/getProducts',
    (req,res)=>{
        res.json({
            'success' : true,
            'products' : [
                {
                    'id' : 1,
                    'name' : 'laptop',
                    'price' : 50000
                },
                {
                    'id' : 2,
                    'name' : 'mobile',
                    'price' : 20000
                }
            ]
        });
    }
);

app.get('/getHtml',
    (req,res)=>{
        // res.sendFile(__dirname + '/index.html');
        res.render('index',{name:'jay'});
    }
)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});