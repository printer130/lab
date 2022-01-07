import { Input } from '../Input'

export default function Fenilalanina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Fenilalanina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Fenilalanina....'
          name='fenilalanina_simple'
        />
      </section>
    </>
  )
}
