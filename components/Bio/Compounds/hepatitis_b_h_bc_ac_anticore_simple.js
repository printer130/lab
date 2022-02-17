import { Input } from '../Input'

export default function HepatitisBHBsAcAnticore ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis B (HBs Ac) Anticore</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis B (HBs Ac) Anticore....'
          name='hepatitis_b_h_bc_ac_anticore_simple'
        />
      </section>
    </>
  )
}
