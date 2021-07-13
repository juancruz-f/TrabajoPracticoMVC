const express = require('express');
const app = express();
app.use(express.static('public'));

const mainRouter = require('./routes/main');
const aboutRouter = require('./routes/about')
app.use('/', mainRouter);
app.use('/about', aboutRouter)




app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });
    