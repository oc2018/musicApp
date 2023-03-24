import express from 'express';

const app = express();

app.get('/', (req, res)=> {
    res.send(`testing`);
});

app.listen(5000, ()=> console.log(`http://localhost:5000`));