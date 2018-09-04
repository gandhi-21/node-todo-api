var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {user} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   var todo = new Todo({
       text: req.body.text
   });

   todo.save().then((doc) => {
      res.send(doc);
   }, (e) => {
      res.status(400).send(e);
   })
});

// app.get('/todos', (req, res) => {
//    Todo.find().then((todos) => {
//       res.send({todos});
//    }, (e) => {
//       res.status(400).send(e);
//    })
// });

// GET /todos/id
app.get('/todos/:id', (req, res) => {
   var id = req.params.id;

    // validate the id using isValid
    //404 - send back empty body
   if(!ObjectID.isValid(id)) {
       return res.status(404).send('Invalid id');
   }

    // findById
    // success
    // if Todo - send it back
    // if no todo - send back 404 with empty body
    Todo.findById(id).then((todo) => {
        if(!todo) {
          return  res.status(404).send('Cannot find user');
        }
        else {
            res.send({todo});
        }
    }).catch((e) => res.status(400).send());
    // error
    // 400 - and send empty body back
});


app.listen(3000, () => {
   console.log('Started on port 3000');
});


