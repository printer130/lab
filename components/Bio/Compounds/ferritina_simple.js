import { Input } from '../Input'

export default function Ferritina ({ register, pdf, value, values, onChange }) {
  return (
    <>
      <section>
        <h3>Ferritina</h3>
        <Input
          pdf={pdf}
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
