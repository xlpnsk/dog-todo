import React from 'react';
import Login from './components/Login';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Dog TODO</h1>
        <button className='btn'>Log out</button>
      </header>
      <main className='main-container'>
        {/* <TodoList/> */}
        <Login/>
      </main>
    </div>
  );
}

export default App;
