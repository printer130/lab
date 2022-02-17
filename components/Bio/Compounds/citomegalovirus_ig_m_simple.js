import { Input } from '../Input'

export default function CitomegalovirusIgM ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>Citomegalovirus - IgM</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Citomegalovirus - IgM....'
        name='citomegalovirus_ig_m_simple'
      />
    </section>
  )
}
