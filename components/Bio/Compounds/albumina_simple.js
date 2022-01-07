import { Input } from '../Input'

export default function Albumina ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>Albumina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Albumina....'
          name='albumina_simple'
        />
      </section>
    </>
  )
}
