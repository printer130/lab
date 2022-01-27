import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function Espermograma ({ onChange, register, value, values }) {
  return (
    <>
      <h2>Espermograma</h2>
      <h3>Examen Físico</h3>
      <section className='section'>
        <Input
          register={register}
          onChange={onChange}
          measure='ml'
          value={!values?.volumen ? value : values.volumen}
          name='espermograma.volumen'
          placeholder='volumen...'
          type='text'
        >
          Volumen:
        </Input>

        <Input
          register={register}
          onChange={onChange}
          measure='min'
          value={!values?.licuefacci_n ? value : values.licuefacci_n}
          name='espermograma.licuefacci_n'
          placeholder='Licuefacción...'
          type='text'
        >
          Licuefacción:
        </Input>

        <Input
          value={!values?.viscosidad ? value : values.viscosidad}
          name='espermograma.viscosidad'
          register={register}
          onChange={onChange}
          placeholder='Viscosidad...'
          type='text'
        >
          Viscosidad:
        </Input>

        <Input
          value={!values?.ph ? value : values.ph}
          name='espermograma.ph'
          register={register}
          onChange={onChange}
          placeholder='pH...'
          type='number'
        >
          pH:
        </Input>
      </section>
      <h3>Recuento y Citología</h3>
      <section className='section'>
        <Input
          value={!values?.vitalidad ? value : values.vitalidad}
          name='espermograma.vitalidad'
          register={register}
          onChange={onChange}
          measure='%'
          placeholder='Vitalidad...'
          type='number'
        >
          Vitalidad:
        </Input>

        <Input
          value={
            !values?.recuento_relativos ? value : values.recuento_relativos
          }
          name='espermograma.recuento_relativos'
          register={register}
          onChange={onChange}
          measure='Millones/ml'
          placeholder='Recuento Relativos...'
          type='text'
        >
          Recuento Relativos:
        </Input>

        <Input
          value={!values?.inmovil ? value : values.inmovil}
          name='espermograma.inmovil'
          register={register}
          onChange={onChange}
          measure='Millones'
          placeholder='Inmovil (IM)...'
          type='text'
        >
          Inmovil (IM):
        </Input>
      </section>
      <h3>Movilidad</h3>
      <section className='section'>
        <Input
          value={!values?.mov_progresivo ? value : values.mov_progresivo}
          name='espermograma.mov_progresivo'
          register={register}
          onChange={onChange}
          measure='%'
          placeholder='Mov. Progresivo...'
          type='text'
        >
          Mov. Progresivo (PR):
        </Input>

        <Input
          value={!values?.mov_no_progresivo ? value : values.mov_no_progresivo}
          name='espermograma.mov_no_progresivo'
          register={register}
          onChange={onChange}
          measure='%'
          placeholder='Mov. No Progresivo (NP)...'
          type='text'
        >
          Mov. No Progresivo (NP):
        </Input>

        <Input
          value={!values?.Inmovil ? value : values.Inmovil}
          name='espermograma.Inmovil'
          register={register}
          onChange={onChange}
          measure='%'
          placeholder='Inmovil (IM)...'
          type='text'
        >
          Inmovil (IM):
        </Input>

        <Input
          value={!values?.movilidad_total ? value : values.movilidad_total}
          name='espermograma.movilidad_total'
          register={register}
          onChange={onChange}
          measure='%'
          placeholder='Movilidad Total (PR+NP)...'
          type='text'
        >
          Movilidad Total (PR+NP):
        </Input>
      </section>
      <h3>Morfologia</h3>
      <Remarks
        value={!values?.remarks ? value : values.remarks}
        name='espermograma.remarks'
        register={register}
      />
    </>
  )
}
