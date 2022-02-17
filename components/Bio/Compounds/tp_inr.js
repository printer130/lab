import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function TP_INR ({
  onChange,
  register,
  value,
  values,
  pdf
}) {
  return (
    <>
      <h2>TP - INR</h2>
      <section className='section'>
        <Input
          pdf={pdf}
          value={
              !values?.tiempo_de_protombina
                ? value
                : values.tiempo_de_protombina
            }
          name='tp_inr.tiempo_de_protombina'
          register={register}
          onChange={onChange}
          type='number'
          measure='segundos'
          placeholder='Tiempo de Protombina (TP)...'
        >
          Tiempo de Protombina (TP):
        </Input>
        <Input
          pdf={pdf}
          value={
              !values?.porcentaje_de_actividad
                ? value
                : values.porcentaje_de_actividad
            }
          name='tp_inr.porcentaje_de_actividad'
          register={register}
          onChange={onChange}
          type='number'
          measure='%'
          placeholder='Porcentaje de actividad...'
        >
          Porcentaje de actividad:
        </Input>

        <p>
          <small> INR FORMULA ?? revisar</small>
        </p>

        <Input
          pdf={pdf}
          value={!values?.promedio_de_t_p ? value : values.promedio_de_t_p}
          name='tp_inr.promedio_de_t_p'
          register={register}
          onChange={onChange}
          type='number'
          measure='segundos'
          placeholder='Promedio de T.P....'
        >
          Promedio de T.P. Normales (50 muestras):
        </Input>
      </section>

      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='tp_inr.remarks'
      />
    </>
  )
}
