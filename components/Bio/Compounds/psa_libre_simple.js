import { Input } from '../Input'

export default function PSALibre ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>PSA Libre</h3>
        <Input
          pdf={pdf}
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
