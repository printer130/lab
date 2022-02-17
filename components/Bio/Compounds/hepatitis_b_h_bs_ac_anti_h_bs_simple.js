import { Input } from '../Input'

export default function HepatitisBHBsAcAntiHBs ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis B (HBs Ac) Anti HBs</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis B (HBs Ac) Anti HBs....'
          name='hepatitis_b_h_bs_ac_anti_h_bs_simple'
        />
      </section>
    </>
  )
}
