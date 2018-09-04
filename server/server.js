var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//     text: {
//       type: String,
//       required: true,
//       minlength: 1,
//       trim: true
//     },
//     completed: {
//       type: Boolean,
//       default: false
//     },
//     completedAt: {
//       type: Number,
//       default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });


// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('unable to save todo');
// });

// var secondTodo = new Todo({
//    text: 'To Do hw',
//    completed: false,
//    completedAt: 0
// });
//
// secondTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

// User model
// email - require - trim it - type string - minlength- 1

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'Gandhi@gmail.com'
});

newUser.save().then((doc => {
    console.log('Saved User', doc);
}), (e) => {
    console.log('Unable to save User', e);
});