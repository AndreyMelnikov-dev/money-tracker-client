import './TransactionsList.scss'
import TransactionItem from './TransactionItem/TransactionItem'

const TransactionsList = () => {

    const transactionsList = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    const transactionsItems = transactionsList.map(item =>
        <div className='trans-line'>
            <span className='gray f8'>29.11.2001 | Понедельник</span>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
        </div>)

    return (
        <div className='trans-list'>
            {transactionsItems}
        </div>
    )
}

export default TransactionsList