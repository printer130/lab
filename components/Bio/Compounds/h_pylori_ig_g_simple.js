import { Input } from '../Input'

export default function HPyloriIgG ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>H. Pylori IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='H. Pylori IgG ....'
          name='h_pylori_ig_g_simple'
        />
      </section>
    </>
  )
}
