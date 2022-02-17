import { Input } from '../Input'

export default function CortisolEnOrina ({
  value,
  values,
  onChange,
  pdf,
  register
}) {
  return (
    <>
      <section>
        <h3>Cortisol en Orina</h3>
        <Input
          pdf={pdf}
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
