import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Card from './components/Card'

function App() {
  const [users] = useState(
  [  
    { 
      username : 'Richard', 
      followers : 15984, 
      id : 0, 
      img : '/profile1.jpg'
    },
    {
      username : 'Katherine', 
      followers : 512, 
      id : 1, 
      img : '/profile2.jpg'
    }, 
    {
      username : 'Jessica', 
      followers : 25213, 
      id : 2, 
      img : '/profile3.jpg'
    }                                  
  ])

  return (
    <div className='home'>  
      <h1>Friends</h1>
      <div className="users">
        {users.map((user, idx) => {
          return <Link to={`friend/${user.id}`} key={idx} className='link'>
                    <Card id={user.id} img={user.img} username={user.username} followers={user.followers}/>
                 </Link>
        })}
      </div>
    </div>
  )
}

export default App
