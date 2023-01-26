export default interface ITransactionItem {
    account: {
        title: string
        icon: string
        id: string
    }
    category: {
        icon: string
        title: string
    }
    type: string,
    value: number
    comment: string
    date: Date
}



interface finalInterface {
    date: Date
    transactions: ITransactionItem[]
}
