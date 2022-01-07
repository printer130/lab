import { Input } from '../Input'

export default function HepatitisBHBsAcAnticore ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis B (HBs Ac) Anticore</h2>
        <Input
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
