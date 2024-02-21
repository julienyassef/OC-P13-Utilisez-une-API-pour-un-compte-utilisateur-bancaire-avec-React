import './UserHeader.scss'

function UserHeader() {
  return (
    <div className="userHeader">
    <h1>Welcome back<br />Tony Jarvis!</h1>
    <button className="userHeader__editButton">Edit Name</button>
  </div>
  )
}
export default UserHeader