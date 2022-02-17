import { Input } from '../Input'

export default function HepatitisBHBcAgIgM ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis B (HBc Ag) IgM</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis B (HBc Ag) IgM....'
          name='hepatitis_b_h_bc_ag_ig_m_simple'
        />
      </section>
    </>
  )
}
