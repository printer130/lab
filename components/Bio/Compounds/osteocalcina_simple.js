import { Input } from '../Input'

export default function Osteocalcina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Osteocalcina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Osteocalcina....'
          name='osteocalcina_simple'
        />
      </section>
    </>
  )
}
