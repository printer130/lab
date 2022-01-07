import { Input } from '../Input'

export default function Creatinina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Creatinina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Creatinina....'
          name='creatinina_simple'
        />
      </section>
    </>
  )
}
