import { Input } from '../Input'

export default function PotasioK ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Potasio K</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Potasio K....'
          name='potasio_k_simple'
        />
      </section>
    </>
  )
}
