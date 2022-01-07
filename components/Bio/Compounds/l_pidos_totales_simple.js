import { Input } from '../Input'

export default function LipidosTotales ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Lipidos Totales</h2>
        <Input
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
