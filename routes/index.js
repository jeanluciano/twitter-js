const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())




router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  
  res.render( 'index', {tweets: tweets, showForm:true });
});

router.get( '/users/:name', function (req, res) {
  let name = req.params.name;
  let list = tweetBank.find({name:name})
//   let content = req.body.content;
//   tweetBank.add(name, content);
  res.render( 'index', {tweets:list, showForm:true});
    
});
router.post('/tweets', function(req,res){
    let name = req.body.name;
    let content = req.body.text;
    tweetBank.add(name,content);
    res.redirect('/')
})

router.get('/tweets/:id', function(req,res){
    let id = req.params.id
    let idList = tweetBank.find({id:id})
    res.render('index',{tweets:idList})
})
module.exports = router;

