import { Input } from '../Input'

export default function CortisolEnOrina ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Cortisol en Orina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Cortisol en Orina....'
          name='cortisol_en_orina_simple'
        />
      </section>
    </>
  )
}
