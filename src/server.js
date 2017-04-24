const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const Attempts = require('./Models/guesses');
app.use(express.static('public'));
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
//connect db
mongoose.connect('mongodb://localhost:27017/attempts')

//get request for guess count
app.get('/attempts', (req, res)=> {
  Attempts.find({}, (err, attempts) => {
    if(err){
      res.send(err)
    }
    res.json(attempts)
    console.log('sent guesses')
  })
});

app.post('/attempts', (req, res)=> {
  Attempts.findOneAndUpdate({id: req.body.id}, {$set:{attempts: req.body.attempts}}, {new: true}, function(err, number){
    if(err){
      res.send(err)
    }
    res.json(number)
      console.log('post received',req.body)
});
});


app.listen(process.env.PORT || 8080, () =>
console.log('Listening on 8080 react app displays on 3000'))
