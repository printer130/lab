import { Input } from '../Input'

export default function Serotonina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Serotonina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Serotonina....'
          name='serotonina_simple'
        />
      </section>
    </>
  )
}
