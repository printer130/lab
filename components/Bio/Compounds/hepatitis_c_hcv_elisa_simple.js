import { Input } from '../Input'

export default function HepatitisCHCVELISA ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis C (HCV) ELISA</h2>
        <Input
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
