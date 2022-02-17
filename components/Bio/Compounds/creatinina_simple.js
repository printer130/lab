import { Input } from '../Input'

export default function Creatinina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Creatinina</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Creatinina....'
          name='creatinina_simple'
        />
      </section>
    </>
  )
}
