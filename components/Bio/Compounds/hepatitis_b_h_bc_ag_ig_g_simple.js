import { Input } from '../Input'

export default function HepatitisBHBcAgIgG ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis B (HBc Ag) IgG</h3>
        <Input
          pdf={pdf}
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
