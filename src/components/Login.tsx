
import { FormEvent, FunctionComponent, useState } from "react";
import { supabase } from "../supabaseClient";

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (e:FormEvent) => {
        e.preventDefault()
        alert("You've just clicked login button!")
    }

    return (
          <div className="login-container">
            <p className="login-description">Sign in via magic link with your email below</p>
            {loading ? (
              'Sending magic link...'
            ) : (
              <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="login-input"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn">
                  Send magic link
                </button>
              </form>
            )}
          </div>
  );
}
 
export default Login;