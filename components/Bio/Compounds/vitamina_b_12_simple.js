import { Input } from '../Input'

export default function VitaminaB12 ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Vitamina B12</h2>
        <Input
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
