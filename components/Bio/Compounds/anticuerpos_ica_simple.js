import { Input } from '../Input'

export default function AnticuerposICA ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Anticuerpos ICA</h3>
        <Input
          pdf={pdf}
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
