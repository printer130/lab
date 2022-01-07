import { Input } from '../Input'

export default function CitomegalovirusIgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Citomegalovirus - IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Citomegalovirus - IgG....'
          name='citomegalovirus_ig_g_simple'
        />
      </section>
    </>
  )
}
