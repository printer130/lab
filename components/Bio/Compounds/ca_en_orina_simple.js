import { Input } from '../Input'

export default function CanOrina ({ value, pdf, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>Ca en Orina</h2>
        <Input
          pdf={pdf}
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
