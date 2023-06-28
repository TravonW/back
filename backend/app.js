const express = require('express');
const fs = require('fs');


const app = express ();
const PORT = 3000;


app.use('/home.', (req, res)=>{
    fs.readFile('../frontend/home.html', (err, data)=>{
        es.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
})

app.use('/contact.', (req, res)=>{
    fs.readFile('../frontend/home.html', (err, data)=>{
        es.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
})

app.use('/about.', (req, res)=>{
    fs.readFile('../frontend/home.html', (err, data)=>{
        es.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
})


