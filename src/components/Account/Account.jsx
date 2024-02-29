//CSS
import './Account.scss'

function Account({account}) {
  return (
    <section className="account">
    <div className="account__content">
      <h3 className="account__content__title">{account.title}</h3>
      <p className="account__content__amount">${account.amount}</p>
      <p className="account__content__description">{account.description}</p>
    </div>
    <button className="account__transaction-button">View transactions</button>
  </section>
  )
}
export default Account