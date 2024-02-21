//css
import './AccountList.scss'

//COMPONENTS 
import Account from '../Account/Account';

function AccountList({ accounts }) {
  return (
    <>
    <h2 className="sr-only">Accounts</h2>
    <ul className="accountList">
        {accounts.map((account, key) => (
            <li key={key} className="accountList__Item">
                <Account account={account} />
            </li>
        ))}
    </ul>
    </>
  )
}
export default AccountList