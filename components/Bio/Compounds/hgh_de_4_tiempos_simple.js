import { Input } from '../Input'

export default function HGHDe4Tiempos ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>HGH de 4 Tiempos </h3>
        <Input
          pdf={pdf}
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
