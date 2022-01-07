import { Input } from '../Input'

export default function HepatitisBHBsAg ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis B (HBs Ag)</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis B (HBs Ag)....'
          name='hepatitis_b_h_bs_ag_simple'
        />
      </section>
    </>
  )
}
