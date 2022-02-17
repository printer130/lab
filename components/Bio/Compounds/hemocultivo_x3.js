import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'

export default function Hemocultivox3 ({ onChange, register, pdf, value, values }) {
  const antibio = values?.antibiograma ?? false

  return (
    <>
      <h2>Hemocultivo x3</h2>
      <h3>1° Muestra Identificación del Germen</h3>
      <section className='section'>
        <IdentificacionDelGermen
          pdf={pdf}
          register={register}
          value={value}
          onChange={onChange}
          muestra
          values={!values?.identificacion ? value : values.identificacion}
          name='hemocultivo_x3.identificacion'
        />
      </section>

      <Remarks
        value={!values?.remarks ? value : values.remarks}
        name='hemocultivo_x3.remarks'
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
              register={register}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              value={!antibio ? value : antibio[map]}
              name={`hemocultivo_x3.antibiograma.${map}`}
            >
              {name}
            </Input>
          )
        })}
      </section>

      <Remarks
        value={!values?.remarks2 ? value : values.remarks2}
        name='hemocultivo_x3.remarks2'
        register={register}
        pdf={pdf}
      />

      <h3>2° Muestra Identificación del Germen</h3>
      <section className='section'>
        <IdentificacionDelGermen
          register={register}
          value={value}
          onChange={onChange}
          pdf={pdf}
          muestra
          values={!values?.identificacion2 ? value : values.identificacion2}
          name='hemocultivo_x3.identificacion2'
        />
      </section>

      <Remarks
        value={!values?.remarks3 ? value : values.remarks3}
        name='hemocultivo_x3.remarks3'
        register={register}
        pdf={pdf}
      />
      <h3>Antibiograma</h3>
      <section className='section'>
        {antibiograma.map(({ name, type, placeholder, map }) => {
          return (
            <Input
              key={name}
              pdf={pdf}
              register={register}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              value={!antibio ? value : antibio[map]}
              name={`hemocultivo_x3.antibiograma2.${map}`}
            >
              {name}
            </Input>
          )
        })}
      </section>

      <Remarks
        pdf={pdf}
        value={!values?.remarks4 ? value : values.remarks4}
        name='hemocultivo_x3.remarks4'
        register={register}
      />
      <h3>3° Muestra Identificación del Germen</h3>
      <section className='section'>
        <IdentificacionDelGermen
          register={register}
          value={value}
          onChange={onChange}
          pdf={pdf}
          muestra
          values={!values?.identificacion3 ? value : values.identificacion3}
          name='hemocultivo_x3.identificacion3'
        />
      </section>

      <Remarks
        value={!values?.remarks5 ? value : values.remarks5}
        name='hemocultivo_x3.remarks5'
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
              register={register}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              value={!antibio ? value : antibio[map]}
              name={`hemocultivo_x3.antibiograma3.${map}`}
            >
              {name}
            </Input>
          )
        })}
      </section>

      <Remarks
        pdf={pdf}
        value={!values?.remarks6 ? value : values.remarks6}
        name='hemocultivo_x3.remarks6'
        register={register}
      />
    </>
  )
}
