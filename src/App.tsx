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
  }, []);

  const logOut = async () => {
    try{
      const { error } = await supabase.auth.signOut();

      if(error)
        throw error
    }
    catch(error){
      alert('This action is unavailable right now')
    }
  }
  
  return (
    <div className="App">
      <header className='header'>
        <h1>Dog TODO</h1>
        {session && <button className='btn' onClick={logOut}>Log out</button>}
      </header>
      <main className='main-container'>
        {!session ? <Login /> : <TodoList/>}
      </main>
    </div>
  );
}

export default App;
