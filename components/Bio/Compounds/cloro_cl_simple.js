import { Input } from '../Input'

export default function CloroCL ({ value, values, pdf, onChange, register }) {
  return (
    <section>
      <h3>Cloro Cl</h3>
      <Input
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        pdf={pdf}
        placeholder='Cloro Cl....'
        name='cloro_cl_simple'
      />
    </section>
  )
}
