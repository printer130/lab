import { Input } from '../Input'

export default function ColesterolHDL ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Colesterol HDL</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Colesterol HDL....'
          name='colesterol_hdl_simple'
        />
      </section>
    </>
  )
}
