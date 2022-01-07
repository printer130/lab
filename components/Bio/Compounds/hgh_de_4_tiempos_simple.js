import { Input } from '../Input'

export default function HGHDe4Tiempos ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>HGH de 4 Tiempos </h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='HGH de 4 Tiempos....'
          name='hgh_de_4_tiempos_simple'
        />
      </section>
    </>
  )
}
