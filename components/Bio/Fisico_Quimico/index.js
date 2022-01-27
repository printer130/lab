import { Input } from '../Input'

export function FisicoQuimico ({ onChange, value, register, name, values }) {
  return (
    <section className='section'>
      <Input
        value={!values ? value : values.consistencia}
        register={register}
        onChange={onChange}
        name={`${name}consistencia`}
        placeholder='Consistencia...'
        type='text'
      >
        Consistencia:
      </Input>

      <Input
        value={!values ? value : values.aspecto}
        register={register}
        onChange={onChange}
        name={`${name}aspecto`}
        placeholder='Aspecto...'
        type='text'
      >
        Aspecto:
      </Input>

      <Input
        value={!values ? value : values.color}
        register={register}
        onChange={onChange}
        name={`${name}color`}
        placeholder='Color...'
        type='text'
      >
        Color:
      </Input>

      <Input
        value={!values ? value : values.ph}
        register={register}
        onChange={onChange}
        name={`${name}ph`}
        placeholder='Ph...'
        type='number'
      >
        pH:
      </Input>
    </section>
  )
}
