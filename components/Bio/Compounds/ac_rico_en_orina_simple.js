import { Input } from '../Input'

export default function AcUricoEnOrina ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>Ac. Urico en orina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Ac. Urico en orina....'
          name='ac_rico_en_orina_simple'
        />
      </section>
    </>
  )
}
