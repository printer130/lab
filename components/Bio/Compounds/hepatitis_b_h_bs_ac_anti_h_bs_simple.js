import { Input } from '../Input'

export default function HepatitisBHBsAcAntiHBs ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis B (HBs Ac) Anti HBs</h2>
        <Input
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
