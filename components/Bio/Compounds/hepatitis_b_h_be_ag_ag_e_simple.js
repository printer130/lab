import { Input } from '../Input'

export default function HepatitisBHBeAgAGE ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis B (HBe Ag) AG E</h3>
        <Input
          pdf={pdf}
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
