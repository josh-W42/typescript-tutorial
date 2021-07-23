"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"]
    .get(url)
    .then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(ID, title, completed);
})["catch"](function (err) {
    console.error(err);
});
/*
  Bellow is another example of why TS is useful

  By defining the types of the parameters, the complier can
  catch common errors we as developers make before running the
  code.
*/
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    Has a title of " + title + "\n    Is it finnished? " + completed + "\n  ");
};
