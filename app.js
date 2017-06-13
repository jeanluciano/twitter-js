const express = require('express')
const app = express()
const template = require('nunjucks')
const routes = require('./routes')

app.use(express.static('public'))
app.use('/', routes)

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

template.configure('views', {noCache: true});

template.render('index.html', locals, function (err, output) {
    if(err) console.log(err);
    //console.log(output);
});


app.set('view engine','html');
app.engine('html',template.render);
template.configure('views');

app.use('/', function(req,res,next){
    console.log(req.method, req.originalUrl, res.statusCode)
    next()
})

app.listen(3000, function (){
    console.log('server listening')
})