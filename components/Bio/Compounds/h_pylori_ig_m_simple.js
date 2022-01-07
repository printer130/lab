import { Input } from '../Input'

export default function HPyloriIgM ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>H. Pylori IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='H. Pylori IgM....'
          name='h_pylori_ig_m_simple'
        />
      </section>
    </>
  )
}
