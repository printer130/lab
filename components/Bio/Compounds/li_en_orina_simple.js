import { Input } from '../Input'

export default function LiEnOrina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Li en Orina</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Li en Orina....'
          name='li_en_orina_simple'
        />
      </section>
    </>
  )
}
