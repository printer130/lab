import { Input } from '../Input'

export default function VitaminaD ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Vitamina D</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Vitamina D...'
          name='vitamina_d_simple'
        />
      </section>
    </>
  )
}
