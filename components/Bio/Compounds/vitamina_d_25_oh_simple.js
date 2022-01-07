import { Input } from '../Input'

export default function VitaminaD25OH ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Vitamina D 25(OH)</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Vitamina D 25(OH)....'
          name='vitamina_d_25_oh_simple'
        />
      </section>
    </>
  )
}
