import { Input } from '../Input'

export default function AnticuerposICA ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Anticuerpos ICA</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Anticuerpos ICA....'
          name='anticuerpos_ica_simple'
        />
      </section>
    </>
  )
}
