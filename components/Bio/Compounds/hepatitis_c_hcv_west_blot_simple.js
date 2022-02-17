import { Input } from '../Input'

export default function HepatitisCHCVWestBlot ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis C (HCV) West. Blot </h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis C (HCV) West. Blot ....'
          name='hepatitis_c_hcv_west_blot_simple'
        />
      </section>
    </>
  )
}
