import './user.css'

function UserCard({id, img, username, followers}) {
    return (
      <div className="Card" id={id}>
          <img src={img} alt="" className="pic" />
          <div className="Details">
              <h4 className="Name">{username}</h4>
              <p className="Followers">{followers} followers</p>
          </div>
      </div>
    )
  }

export default UserCard