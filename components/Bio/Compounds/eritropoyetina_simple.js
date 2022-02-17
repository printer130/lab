import { Input } from '../Input'

export default function Eritropoyetina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Eritropoyetina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Eritropoyetina....'
          name='eritropoyetina_simple'
        />
      </section>
    </>
  )
}
