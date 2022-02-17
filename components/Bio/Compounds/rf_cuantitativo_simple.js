import { Input } from '../Input'

export default function RFCuantitativo ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>RF Cuantitativo</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='RF Cuantitativo....'
          name='rf_cuantitativo_simple'
        />
      </section>
    </>
  )
}
