import { Input } from '../Input'

export default function CEA ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>CEA</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='CEA...'
          name='cea_simple'
        />
      </section>
    </>
  )
}
