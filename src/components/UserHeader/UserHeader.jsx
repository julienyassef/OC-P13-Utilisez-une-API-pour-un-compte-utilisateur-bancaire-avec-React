//CSS
import './UserHeader.scss'

//React & redux
import { useSelector } from 'react-redux';
import { selectUserFirstName, selectUserLastName } from '../../store/selectors/userSelectors'


function UserHeader() {
  const fisrtName = useSelector(selectUserFirstName);
  const lastName = useSelector(selectUserLastName)

  return (
    <div className="userHeader">
    <h1>Welcome back<br />{fisrtName} {lastName}</h1>
    <button className="userHeader__editButton">Edit Name</button>
  </div>
  )
}
export default UserHeader