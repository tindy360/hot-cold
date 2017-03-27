const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
app.use(express.static('public'));
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//connect db
mongoose.connect();

app.get('/fewestGuesses', (req, res)=> {
  Guess.find({}, (err, guess) => {
    if(err){
      res.send(err)
    }
    res.json(guess)
  })
});

app.post('/fewestGuesses', (req, res)=> {

});


app.listen(process.env.PORT || 8080, () =>
console.log('Listening on 8080 react app displays on 3000'))
