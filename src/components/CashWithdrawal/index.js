import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  debitAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state

    const denominatorsList = [
      {key: 1, amount: 50},
      {key: 2, amount: 100},
      {key: 3, amount: 200},
      {key: 4, amount: 500},
    ]

    return (
      <div className="container">
        <div className="card-container">
          <div className="name-container">
            <h1 className="first-letter">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="amount">{balance}</p>
              <p className="amount-descriptions">In Rupees</p>
            </div>
          </div>
        </div>
        <h1 className="Withdraw">Withdraw</h1>
        <p className="withdraw-description">CHOOSE SUM(IN RUPEES)</p>
        <ul className="denominations-container">
          {denominatorsList.map(each => (
            <DenominationItem
              denominator={each}
              key={each.key}
              debitAmount={this.debitAmount}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
