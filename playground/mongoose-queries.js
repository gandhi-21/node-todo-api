const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/User');

// var id = '5b8efb3bd86ad91a77e9c6f';
//
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

// import user model
// User.findById
// User not found
// Any error that might occur

var id = '5b8ee7bd8f7eb51899fd782b';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User by id', user);
}, (e) => {
    console.log(e);
}).catch((e) => console.log(e));