import { Input } from '../Input'

export default function AnticuerposGAD ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Anticuerpos GAD</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Anticuerpos GAD....'
          name='anticuerpos_gad_simple'
        />
      </section>
    </>
  )
}
