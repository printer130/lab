import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'

export default function Hemocultivox2 ({ onChange, pdf, values, register, value }) {
  const antibio = values?.antibiograma ?? false

  return (
    <>
      <h2>Hemocultivo x2</h2>
      <h3>1° Muestra Identificación del Germen</h3>
      <section className='section'>
        <IdentificacionDelGermen
          pdf={pdf}
          muestra
          register={register}
          onChange={onChange}
          values={!values?.identificacion ? value : values.identificacion}
          name='hemocultivo_x2.identificacion'
        />
      </section>

      <Remarks
        value={!values?.remarks ? value : values.remarks}
        name='hemocultivo_x2.remarks'
        register={register}
        pdf={pdf}
      />

      <h3>Antibiograma</h3>
      <section className='section'>
        {antibiograma.map(({ name, type, placeholder, map }) => {
          return (
            <Input
              pdf={pdf}
              key={name}
              value={!antibio ? value : antibio[map]}
              name={`hemocultivo_x2.antibiograma.${map}`}
              register={register}
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
        pdf={pdf}
        value={!values?.remarks2 ? value : values.remarks2}
        name='hemocultivo_x2.remarks2'
        register={register}
      />

      <h3>2° Muestra Identificación del Germen</h3>
      <section className='section'>
        <IdentificacionDelGermen
          register={register}
          pdf={pdf}
          values={!values?.identificacion2 ? value : values.identificacion2}
          name='hemocultivo_x2.identificacion2'
          value={value}
          onChange={onChange}
          muestra
        />
      </section>

      <Remarks
        pdf={pdf}
        value={!values?.remarks3 ? value : values.remarks3}
        name='hemocultivo_x2.remarks3'
        register={register}
      />
      <h3>Antibiograma</h3>
      <section className='section'>
        {antibiograma.map(({ name, type, placeholder, map }) => {
          return (
            <Input
              pdf={pdf}
              value={!antibio ? value : antibio[map]}
              name={`hemocultivo_x2.antibiograma.${map}`}
              key={name}
              register={register}
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
        pdf={pdf}
        value={!values?.remarks4 ? value : values.remarks4}
        name='hemocultivo_x2.remarks4'
        register={register}
      />
    </>
  )
}
