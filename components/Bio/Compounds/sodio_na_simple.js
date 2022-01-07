import { Input } from '../Input'

export default function SodioNa ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Sodio Na</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Sodio Na....'
          name='sodio_na_simple'
        />
      </section>
    </>
  )
}
