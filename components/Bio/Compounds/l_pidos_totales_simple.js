import { Input } from '../Input'

export default function LipidosTotales ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Lipidos Totales</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Lipidos Totales....'
          name='l_pidos_totales_simple'
        />
      </section>
    </>
  )
}
