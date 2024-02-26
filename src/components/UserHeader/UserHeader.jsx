//CSS
import './UserHeader.scss'


function UserHeader( { firstName, lastName }) {
  

  return (
    <div className="userHeader">
    <h1>Welcome back<br />{firstName} {lastName}</h1>
    <button className="userHeader__editButton">Edit Name</button>
  </div>
  )
}
export default UserHeader