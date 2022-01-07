import { Input } from '../Input'

export default function Amonio ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>Amonio</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Amonio....'
          name='amonio_simple'
        />
      </section>
    </>
  )
}
