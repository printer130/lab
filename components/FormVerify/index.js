import { Button, Input } from 'components'

export const FormVerify = ({ onCheckbox, onSave, listToVerify }) => {
  return (
    <form onSubmit={onSave}>
      {listToVerify.map(item => {
        return (
          <Input
            key={item.name}
            name={item.name}
            onChange={onCheckbox}
            type='checkbox'
            checked={item.isChecked}
            price={item.price}
          >
            {item.name}
          </Input>
        )
      })}
      <Button>Guardar</Button>
    </form>
  )
}
