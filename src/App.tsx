import { Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { supabase } from './supabaseClient';


function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  return (
    <div className="App">
      <header className='header'>
        <h1>Dog TODO</h1>
        <button className='btn'>Log out</button>
      </header>
      <main className='main-container'>
        {!session ? <Login /> : <TodoList/>}
      </main>
    </div>
  );
}

export default App;
