import { Input } from '../Input'

export default function Prolactina ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Prolactina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Prolactina....'
          name='prolactina_simple'
        />
      </section>
    </>
  )
}
