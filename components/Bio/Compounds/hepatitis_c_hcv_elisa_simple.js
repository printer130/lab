import { Input } from '../Input'

export default function HepatitisCHCVELISA ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis C (HCV) ELISA</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis C (HCV) ELISA ....'
          name='hepatitis_c_hcv_elisa_simple'
        />
      </section>
    </>
  )
}
