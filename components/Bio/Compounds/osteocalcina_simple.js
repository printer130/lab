import { Input } from '../Input'

export default function Osteocalcina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Osteocalcina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Osteocalcina....'
          name='osteocalcina_simple'
        />
      </section>
    </>
  )
}
