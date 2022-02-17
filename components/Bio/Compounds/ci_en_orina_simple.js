import { Input } from '../Input'

export default function CInOrina ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>CI en Orina</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='ci en Orina'
        name='ci_en_orina_simple'
      />
    </section>
  )
}
