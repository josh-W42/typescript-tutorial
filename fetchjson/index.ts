import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
/* 
  So this is just a basic application that fetches data from
  a dummy API...
  
  The propose of this program to show one of the benifits of using TS.

  Before using the interface bellow, we would run into a logic error
  where the data would display as undefined but now with TS we can
  avoid this because the TS compiler would display an error.
*/

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
      The Todo with ID: ${ID}
      Has a title of ${title}
      Is it finnished? ${completed}
    `);
  })
  .catch((err) => {
    console.error(err);
  });
