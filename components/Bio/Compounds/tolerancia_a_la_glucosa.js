import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function CurvaToleranciaALaGlucosa ({
  onChange,
  register,
  values,
  value
}) {
  return (
    <>
      <section>
        <h2>Curva Tolerancia a la Glucosa</h2>
        <Input
          register={register}
          onChange={onChange}
          type='number'
          measure='mg/dL'
          placeholder='glucosa basal...'
          value={!values?.glucosa_basal ? value : values.glucosa_basal}
          name='tolerancia_a_la_glucosa.glucosa_basal'
        >
          Glucosa Basal:
        </Input>

        <Input
          value={
            !values?.glucosa_estimulo_60_min
              ? value
              : values.glucosa_estimulo_60_min
          }
          name='tolerancia_a_la_glucosa.glucosa_estimulo_60_min'
          register={register}
          onChange={onChange}
          type='number'
          measure='mg/dL'
          placeholder='glucosa estímulo de 60min...'
        >
          Glucosa Estímulo de 60 min.:
        </Input>

        <Input
          value={
            !values?.glucosa_estimulo_120_min
              ? value
              : values.glucosa_estimulo_120_min
          }
          name='tolerancia_a_la_glucosa.glucosa_estimulo_120_min'
          register={register}
          onChange={onChange}
          type='number'
          measure='mg/dL'
          placeholder='glucosa estímulo de 120min...'
        >
          Glucosa Estímulo de 120 min.:
        </Input>

        <Input
          value={
            !values?.glucosa_estimulo_180_min
              ? value
              : values.glucosa_estimulo_180_min
          }
          name='tolerancia_a_la_glucosa.glucosa_estimulo_180_min'
          register={register}
          onChange={onChange}
          type='number'
          measure='mg/dL'
          placeholder='glucosa estímulo de 180min...'
        >
          Glucosa Estímulo de 180 min.:
        </Input>

        <Remarks
          value={!values?.remarks ? value : values.remarks}
          register={register}
          name='tolerancia_a_la_glucosa.remarks'
        />
      </section>
    </>
  )
}
