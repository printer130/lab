import { Input } from '../Input'

export default function Amonio ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Amonio</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='Amonio....'
          name='amonio_simple'
        />
      </section>
    </>
  )
}
