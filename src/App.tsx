import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import UserList from "./components/userList";
import TodoList from "./components/todoList";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <UserList />
            <br/>
            <TodoList />
        </div>
      </Provider>

  );
}

export default App;
