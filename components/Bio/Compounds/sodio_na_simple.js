import { Input } from '../Input'

export default function SodioNa ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Sodio Na</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Sodio Na....'
          name='sodio_na_simple'
        />
      </section>
    </>
  )
}
