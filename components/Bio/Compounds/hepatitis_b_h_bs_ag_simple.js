import { Input } from '../Input'

export default function HepatitisBHBsAg ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis B (HBs Ag)</h3>
        <Input
          pdf={pdf}
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
