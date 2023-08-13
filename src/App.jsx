import Header from './Mycomponent/header.jsx'
import { Todos } from './Mycomponent/Todos.jsx'
import { Addtodos } from './Mycomponent/Addtodos.jsx';
import { Footer } from './Mycomponent/Footer.jsx'
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const ondelete = (todo) => {
    console.log("delete of todo", todo);
    // letindex =todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    console.log("tittle :", title);
    console.log("desc :", desc);
    let num = todos.length - 1;
    let sno;
    if (num >= 0) {
      sno = todos[num].sno + 1;
    } else {
      sno = 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      des: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
      <Header title='My Todolist' />
      <Addtodos addTodo={addTodo} />
      <Todos todos={todos} ondelete={ondelete} />
      <Footer />
    </>
  );
}

export default App;
