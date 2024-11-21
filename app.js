const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
