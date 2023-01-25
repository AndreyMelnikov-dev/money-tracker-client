import IconBig from '../../UI/IconBig/IconBig'
import IconSmall from '../../UI/IconSmall/IconSmall'
import SimpleButton from '../../UI/SimpleButton/SimpleButton'
import SimpleModal from '../../UI/SimpleModal/SimpleModal'
import './Transaction.scss'

const Transaction = () => {
  return (
    <>
      <form className='transaction-page'>
        <div className='transaction-types'>
          <button className='f8 transaction-types__item active'>Расход</button>
          <button className='f8 transaction-types__item'>Доход</button>
          <button className='f8 transaction-types__item'>Перевод</button>
        </div>
        <div className='transaction-value'>
          <input className='f3' type='text' />
        </div>
        <div className='transaction-icons'>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>Visa Main</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
          <div className='transaction-icons__element'>
            <IconBig>1</IconBig>
            <span className='f9'>title</span>
          </div>
        </div>
        <div className='transaction-more'>
          <div className='transaction-more__line'>
            <div className='title'>
              <IconSmall></IconSmall>
              <span className='f8'>Visa Main Bank</span>
            </div>
            <div className='f10 '>12 000 $</div>
          </div>
          <div className='transaction-more__line'>
            <div className='title'>
              <IconSmall></IconSmall>
              <span className='f8'>29.11.2001 | Понедельник</span>
            </div>
          </div>
          <div className='transaction-more__line'>
            <div className='title'>
              <IconSmall></IconSmall>
              <span className='f8'>Комментарий</span>
            </div>
          </div>
        </div>
        <div className='transaction-actions'>
          <SimpleButton>Сохранить</SimpleButton>
          <button className='transaction-actions__remove'>Удалить</button>
        </div>
      </form>
      <SimpleModal>
        
      </SimpleModal>
    </>
  )
}

export default Transaction