import { Input } from '../Input'

export default function ColesterolHDL ({ value, pdf, values, onChange, register }) {
  return (
    <section>
      <h3>Colesterol HDL</h3>
      <Input
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        pdf={pdf}
        type='number'
        placeholder='Colesterol HDL....'
        name='colesterol_hdl_simple'
      />
    </section>
  )
}
