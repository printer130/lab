import { Input } from '../Input'

export default function HPyloriIgA ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>H. Pylori IgA</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='H. Pylori IgA....'
          name='h_pylori_ig_a_simple'
        />
      </section>
    </>
  )
}
