import { Input } from '../Input'

export default function PTH2aGenercion ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>PTH 2a Generción</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='PTH 2a Generción....'
          name='pth_2_a_generaci_n_simple'
        />
      </section>
    </>
  )
}
