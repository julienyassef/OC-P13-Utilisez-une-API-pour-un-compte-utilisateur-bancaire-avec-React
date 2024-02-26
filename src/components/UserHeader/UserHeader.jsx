import './UserHeader.scss'

function UserHeader( {fisrtName, lastName}) {
  return (
    <div className="userHeader">
    <h1>Welcome back<br />{fisrtName} {lastName}</h1>
    <button className="userHeader__editButton">Edit Name</button>
  </div>
  )
}
export default UserHeader