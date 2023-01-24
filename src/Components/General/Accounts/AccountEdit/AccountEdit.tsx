import IconBig from '../../../UI/IconBig/IconBig'
import SimpleButton from '../../../UI/SimpleButton/SimpleButton'
import SimpleInput from '../../../UI/SimpleInput/SimpleInput'
import './AccountEdit.scss'

const AccountEdit = () => {
    return (
        <div className='account-edit'>
            <h2 className='f2 account-edit__title'>Редактирование счета</h2>
            <form className='account-edit__form'>
                <div className='inputs'>
                    <SimpleInput title='some title' />
                    <SimpleInput title='some title' />
                    <SimpleInput title='some title' />
                </div>
                <div className='icons'>
                    <h3 className='f8'>Иконка счета</h3>
                    <div className='list'>
                        <IconBig isPointer={true} isActive={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                        <IconBig isPointer={true}>123</IconBig>
                    </div>
                </div>
                <SimpleButton className='submit'>Сохранить</SimpleButton>
            </form>
        </div>
    )
}

export default AccountEdit