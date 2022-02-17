import { Input } from '../Input'

export default function HormonaAntimulleriana ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hormona Antimulleriana</h3>
        <Input
          pdf={pdf}
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
