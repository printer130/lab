import { Input } from '../Input'

export default function VitaminaB12 ({ value, onChange, values, pdf, register }) {
  return (
    <>
      <section>
        <h3>Vitamina B12</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Vitamina B12....'
          name='vitamina_b_12_simple'
        />
      </section>
    </>
  )
}
