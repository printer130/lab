import { Input } from '../Input'

export default function AnticuerposGAD ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Anticuerpos GAD</h2>
        <Input
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
