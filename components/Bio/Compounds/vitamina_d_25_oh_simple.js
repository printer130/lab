import { Input } from '../Input'

export default function VitaminaD25OH ({ value, values, onChange, register, pdf }) {
  return (
    <>
      <section>
        <h3>Vitamina D 25(OH)</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Vitamina D 25(OH)....'
          name='vitamina_d_25_oh_simple'
        />
      </section>
    </>
  )
}
