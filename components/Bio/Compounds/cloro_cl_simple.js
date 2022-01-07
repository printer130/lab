import { Input } from '../Input'

export default function CloroCL ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Cloro Cl</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Cloro Cl....'
          name='cloro_cl_simple'
        />
      </section>
    </>
  )
}
