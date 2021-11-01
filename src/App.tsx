import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import UserList from "./components/userList";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <UserList />
        </div>
      </Provider>

  );
}

export default App;
