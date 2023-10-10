import './card.css'

function Card({id, img, username, followers}) {
  return (
    <div className="userCard" id={id}>
        <img src={img} alt="" className="pic" />
        <div className="userDetails">
            <h4 className="userName">{username}</h4>
            <p className="userFollowers">{followers} followers</p>
        </div>
    </div>
  )
}

export default Card;