import { Button } from 'components'
import { DicList } from 'components/DicList'

export const FormContinue = ({ onForm, onList, checked }) => {
  return (
    <>
      <form
        onSubmit={onForm}
      >
        <h1>Lista de analisis y laboratorio</h1>
        <DicList
          onChange={onList}
        />
        <Button>Continuar</Button>
      </form>
      <style jsx>{`
        header {
          display: grid;
          align-items: flex-start;
          padding-top: 1.8rem;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        } 
        header div {
          width: fit-content;
        }
        small {
          heiht: 40px;
        }
      `}
      </style>
    </>
  )
}
