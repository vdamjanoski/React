import { useState } from 'react'
import './App.css'
import { UserStatus } from './components/UserStatus';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import MoodSelector from './components/MoodSelector';
import MoodDisplay from './components/MoodDisplay';
import BookCard from './components/BookCard';
import BookLibrary from './components/BookLibrary';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleLogin = () => { setIsLoggedIn(!isLoggedIn)}
  const toggleAdmin = () => { setIsAdmin(!isAdmin)}


  const [mood, setMood] = useState("");

  return (
  <div>
      <header>
        <h1>User Status Dashboard</h1>
        <div>
          <div>
            <h2>You are Logged {isLoggedIn ? "In" : "Out"}</h2>
            <button onClick={toggleLogin}>{ isLoggedIn ? "Logout" : "Login" }</button>
          </div>
        </div>
      </header>
        <br />
        {isLoggedIn && (
          <>
          <button onClick={toggleAdmin}>Switch to {isAdmin ? "User" : "Admin"}</button>
          <h2>Hello {isAdmin ? "Admin" : "User"}</h2>
          </>
        )}
        
        {isLoggedIn ? (
          <div className='user-status'>
          <UserStatus isAdmin={isAdmin}/> 
          {isAdmin && <AdminPanel/>}
          </div>
        ) : (
          <Login/>
        )}

          <h1>Mood Tracker</h1>
          <MoodSelector setMood={setMood}/>
          <MoodDisplay mood={mood}/>
          <BookLibrary/>
  </div>
  )
}

export default App
