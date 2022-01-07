import { Input } from '../Input'

export default function HPyloriIgA ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>H. Pylori IgA</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='H. Pylori IgA....'
          name='h_pylori_ig_a_simple'
        />
      </section>
    </>
  )
}
