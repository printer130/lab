import { Input } from '../Input'

export default function PotasioK ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Potasio K</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Potasio K....'
          name='potasio_k_simple'
        />
      </section>
    </>
  )
}
