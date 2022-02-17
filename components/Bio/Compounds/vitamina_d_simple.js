import { Input } from '../Input'

export default function VitaminaD ({ value, values, onChange, register, pdf }) {
  return (
    <>
      <section>
        <h3>Vitamina D</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Vitamina D...'
          name='vitamina_d_simple'
        />
      </section>
    </>
  )
}
