import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'

export default function CultivoDeSecrecion ({
  onChange,
  values,
  register,
  pdf,
  value
}) {
  const antibio = values?.antibiograma ?? false

  return (
    <>
      <section>
        <h2>Cultivo de Secreción</h2>
        <h3>Identificación del Germen</h3>
        <section className='section'>
          <Input
            pdf={pdf}
            value={
              !values?.muestra_de_secrecion
                ? value
                : values.muestra_de_secrecion
            }
            register={register}
            onChange={onChange}
            type='text'
            placeholder='muestra...'
            name='cultivo_de_secrecion.muestra_de_secrecion'
          >
            Muestra
          </Input>

          <Input
            pdf={pdf}
            value={
              !values?.germen_identificado ? value : values.germen_identificado
            }
            register={register}
            onChange={onChange}
            name='cultivo_de_secrecion.germen_identificado'
            placeholder='1° Germen Identificado...'
            type='text'
          >
            1° Germen Identificado:
          </Input>

          <IdentificacionDelGermen
            pdf={pdf}
            register={register}
            value={value}
            onChange={onChange}
            values={
              !values?.identificacion_del_germen_2
                ? value
                : values.identificacion_del_germen_2
            }
            name='cultivo_de_secrecion.identificacion_del_germen_2'
          />
        </section>
        <Remarks
          pdf={pdf}
          name='cultivo_de_secrecion.remarks'
          value={!values?.remarks ? value : values.remarks}
          register={register}
        />

        <h3>Antibiograma</h3>
        <section className='section'>
          {antibiograma.map(({ name, type, placeholder, map }) => {
            return (
              <Input
                pdf={pdf}
                key={map}
                value={!antibio ? value : antibio[map]}
                register={register}
                onChange={onChange}
                name={`cultivo_de_secrecion.antibiograma.${map}`}
                placeholder={placeholder}
                type={type}
              >
                {name}
              </Input>
            )
          })}
        </section>

        <Remarks
          pdf={pdf}
          name='cultivo_de_secrecion.remarks2'
          value={!values?.remarks2 ? value : values.remarks2}
          register={register}
        />
      </section>
    </>
  )
}
