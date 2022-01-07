import { Input } from '../Input'

export default function HepatitisBHBcAgIgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis B (HBc Ag) IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis B (HBc Ag) IgG....'
          name='hepatitis_b_h_bc_ag_ig_g_simple'
        />
      </section>
    </>
  )
}
