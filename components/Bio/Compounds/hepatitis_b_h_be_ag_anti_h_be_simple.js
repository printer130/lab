import { Input } from '../Input'

export default function HepatitisBHBeAgAntiHBe ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis B (HBe Ag) Anti HBe</h2>
        <Input
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
