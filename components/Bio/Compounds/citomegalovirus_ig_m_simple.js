import { Input } from '../Input'

export default function CitomegalovirusIgM ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Citomegalovirus - IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Citomegalovirus - IgM....'
          name='citomegalovirus_ig_m_simple'
        />
      </section>
    </>
  )
}
