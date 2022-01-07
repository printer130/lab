import { Input } from '../Input'

export default function RFCuantitativo ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>RF Cuantitativo</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='RF Cuantitativo....'
          name='rf_cuantitativo_simple'
        />
      </section>
    </>
  )
}
