import { Input } from '../Input'

export default function HPyloriIgG ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>H. Pylori IgG</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='H. Pylori IgG ....'
          name='h_pylori_ig_g_simple'
        />
      </section>
    </>
  )
}
