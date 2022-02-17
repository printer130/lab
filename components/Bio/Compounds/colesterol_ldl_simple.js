import { Input } from '../Input'

export default function ColesterolLDL ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>Colesterol LDL</h3>
      <Input
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        pdf={pdf}
        type='number'
        placeholder='Colesterol LDL....'
        name='colesterol_ldl_simple'
      />
    </section>
  )
}
