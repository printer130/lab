import { Input } from '../Input'

export default function PSALibre ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>PSA Libre</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='PSA Libre...'
          name='psa_libre_simple'
        />
      </section>
    </>
  )
}
