import { Input } from '../Input'

export default function Serotonina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Serotonina</h2>
        <Input
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
