import { IdentificacionDelGermen } from '../Identificacion'
import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function CultivoDeHongos ({
  onChange,
  values,
  register,
  value,
  pdf
}) {
  return (
    <>
      <section>
        <h2>Cultivo de Hongos</h2>
        <h3>Identificación del Germen</h3>
        <section className='section'>
          <Input
            pdf={pdf}
            value={
              !values?.muestra_de_hongos ? value : values.muestra_de_hongos
            }
            register={register}
            onChange={onChange}
            name='cultivo_de_hongos.muestra_de_hongos'
            placeholder='muestra...'
            type='text'
          >
            Muestra:
          </Input>

          <IdentificacionDelGermen
            pdf={pdf}
            register={register}
            value={value}
            values={
              !values?.identificacion_del_germen
                ? value
                : values.identificacion_del_germen
            }
            onChange={onChange}
            name='cultivo_de_hongos.identificacion_del_germen'
          />
        </section>

        <Remarks
          pdf={pdf}
          value={!values?.remarks ? value : values.remarks}
          name='cultivo_de_hongos.remarks'
          register={register}
        />
      </section>
    </>
  )
}
