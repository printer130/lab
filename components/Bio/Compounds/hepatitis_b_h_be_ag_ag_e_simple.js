import { Input } from '../Input'

export default function HepatitisBHBeAgAGE ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis B (HBe Ag) AG E</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis B (HBe Ag) AG E....'
          name='hepatitis_b_h_be_ag_ag_e_simple'
        />
      </section>
    </>
  )
}
