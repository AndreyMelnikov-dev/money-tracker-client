import './TransactionsList.scss'
import TransactionItem from './TransactionItem/TransactionItem'

const TransactionsList = () => {
    // delete on release
    const transactionsList = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
    ]

    const transactionsItems = transactionsList.map(item =>
        <div className='trans-line' key={item.id}>
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