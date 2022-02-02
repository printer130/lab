import { DicList } from 'components/DicList'
import { Portal } from 'components/Portal'

export const FormContinue = ({ onForm, onList, receipt }) => {
  return (
    <form>
      <DicList onChange={onList} />
      {
        !receipt && <Portal id='portal'>
          <button
            onClick={onForm}
          >Continuar
          </button>
        </Portal>
        }
    </form>
  )
}
