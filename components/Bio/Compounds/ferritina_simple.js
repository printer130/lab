import { Input } from '../Input'

export default function Ferritina ({ register, value, values, onChange }) {
  return (
    <>
      <section>
        <h2>Ferritina</h2>
        <Input
          value={!values ? value : values}
          onChagen={onChange}
          name='ferritina_simple'
          type='number'
          register={register}
        />
      </section>
    </>
  )
}
