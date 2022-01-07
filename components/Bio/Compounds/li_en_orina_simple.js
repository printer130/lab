import { Input } from '../Input'

export default function LiEnOrina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Li en Orina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Li en Orina....'
          name='li_en_orina_simple'
        />
      </section>
    </>
  )
}
