import { Input } from '../Input'

export default function HormonaAntimulleriana ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hormona Antimulleriana</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hormona Antimulleriana....'
          name='hormona_antimulleriana_simple'
        />
      </section>
    </>
  )
}
