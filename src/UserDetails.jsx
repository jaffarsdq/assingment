import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserCard from "./components/UserCard";

import './UserDetails.css'

function UserDetails() {

    const { id } = useParams();

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

    const [filtered, setFiltered] = useState();

    function filteredUser () {
        const filter = users.filter((user) => user.id === Number(id));
        setFiltered(filter);
    }
    
    useEffect(() => {
        filteredUser();
    },[])

  return (

    <div className="detail">
      <div className="gradient">

      </div>
      
      <div className="card">
        {filtered && filtered.map((filter, idx) => {
          return <UserCard key={idx} id={filter.id} img={filter.img} username={filter.username} followers={filter.followers}/>
        })}
      </div>
    </div>

  )
}

export default UserDetails