import { Input } from '../Input'

export default function HepatitisBHBeAgAntiHBe ({
  value,
  values,
  onChange,
  pdf,
  register
}) {
  return (
    <>
      <section>
        <h3>Hepatitis B (HBe Ag) Anti HBe</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis B (HBe Ag) Anti HBe....'
          name='hepatitis_b_h_be_ag_anti_h_be_simple'
        />
      </section>
    </>
  )
}
