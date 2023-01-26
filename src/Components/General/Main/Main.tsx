import IAccount from "../../../Models/IAccount"
import TransactionsList from "../../UI/TransactionsList/TransactionsList"

const Main = () => {


  // delete on release
  const transactionsListTest: IAccount[] = [
    {
      id: 'string',
      title: 'string',
      value: 123,
      currency: 'string',
      description: 'string',
      icon: 'string',
    },
    {
      id: 'string',
      title: 'string',
      value: 123,
      currency: 'string',
      description: 'string',
      icon: 'string',
    },
  ]

  return (
    <div>
      <TransactionsList />
    </div>
  )
}

export default Main