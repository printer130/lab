import { Input } from '../Input'

export default function Ves ({ onChange, values, register, value }) {
  return (
    <>
      <h2>V.E.S.</h2>
      <section className='section'>
        <Input
          value={!values?.una_hora ? value : values.una_hora}
          name='ves.una_hora'
          register={register}
          onChange={onChange}
          type='number'
          measure='mm/hrs'
          placeholder='ves...'
        >
          1ra. Hora:
        </Input>
        <Input
          value={!values?.dos_hora ? value : values.dos_hora}
          name='ves.dos_hora'
          register={register}
          onChange={onChange}
          type='number'
          measure='mm/hrs'
          placeholder='ves...'
        >
          2da. Hora:
        </Input>
        <Input
          value={!values?.katz ? value : values.katz}
          name='ves.katz'
          register={register}
          onChange={onChange}
          type='number'
          placeholder='Indice de katz...'
        >
          Indice de Katz:
        </Input>
      </section>
    </>
  )
}
