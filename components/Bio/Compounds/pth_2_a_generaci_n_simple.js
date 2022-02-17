import { Input } from '../Input'

export default function PTH2aGenercion ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>PTH 2a Generción</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='PTH 2a Generción....'
          name='pth_2_a_generaci_n_simple'
        />
      </section>
    </>
  )
}
