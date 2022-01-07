import { Input } from '../Input'

export default function Eritropoyetina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Eritropoyetina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Eritropoyetina....'
          name='eritropoyetina_simple'
        />
      </section>
    </>
  )
}
