import { Input } from '../Input'

export default function CanOrina ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>Ca en Orina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Ca en Orina...'
          name='ca_en_orina_simple'
        />
      </section>
    </>
  )
}
