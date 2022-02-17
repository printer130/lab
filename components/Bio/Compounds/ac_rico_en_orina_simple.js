import { Input } from '../Input'

export default function AcUricoEnOrina ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Ac. Urico en orina</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='Ac. Urico en orina....'
          name='ac_rico_en_orina_simple'
        />
      </section>
    </>
  )
}
