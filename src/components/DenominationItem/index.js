import './index.css'

const DenominationItem = props => {
  const {denominator, debitAmount} = props

  const onDebit = denominator => {
    debitAmount(denominator.amount)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onDebit}>
        {denominator.amount}
      </button>
    </li>
  )
}

export default DenominationItem
