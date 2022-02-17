import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'

export default function Hemocultivox1 ({ onChange, pdf, register, values, value }) {
  const antibio = values?.antibiograma ?? false
  return (
    <>
      <section>
        <h2>Hemocultivo x1</h2>
        <h3>Identificación del Germen</h3>
        <section className='section'>
          <IdentificacionDelGermen
            pdf={pdf}
            register={register}
            muestra
            onChange={onChange}
            values={!values?.identificacion ? value : values.identificacion}
            name='hemocultivo_x1.identificacion'
          />
        </section>

        <Remarks
          value={!values?.remarks ? value : values.remarks}
          name='hemocultivo_x1.remarks'
          register={register}
          pdf={pdf}
        />

        <h3>Antibiograma</h3>
        <section className='section'>
          {antibiograma.map(({ name, map, type, placeholder }) => {
            return (
              <Input
                pdf={pdf}
                key={map}
                register={register}
                value={!antibio ? value : antibio[map]}
                name={`hemocultivo_x1.antibiograma.${map}`}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
              >
                {name}
              </Input>
            )
          })}
        </section>

        <Remarks
          value={!values?.remarks2 ? value : values.remarks2}
          name='hemocultivo_x1.remarks2'
          register={register}
          pdf={pdf}
        />
      </section>
    </>
  )
}
