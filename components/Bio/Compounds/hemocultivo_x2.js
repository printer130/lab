import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'

export default function Hemocultivox2 ({ onChange, values, register, value }) {
  const antibio = values?.antibiograma ?? false

  return (
    <>
      <section>
        <h2>Hemocultivo x2</h2>
        <h3>1° Muestra Identificación del Germen</h3>

        <IdentificacionDelGermen
          muestra
          register={register}
          onChange={onChange}
          values={!values?.identificacion ? value : values.identificacion}
          name='hemocultivo_x2.identificacion'
        />

        <Remarks
          value={!values?.remarks ? value : values.remarks}
          name='hemocultivo_x2.remarks'
          register={register}
        />

        <h3>Antibiograma</h3>

        {antibiograma.map(({ name, type, placeholder, map }) => {
          return (
            <Input
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
        <Remarks
          value={!values?.remarks2 ? value : values.remarks2}
          name='hemocultivo_x2.remarks2'
          register={register}
        />

        <h3>2° Muestra Identificación del Germen</h3>

        <IdentificacionDelGermen
          register={register}
          values={!values?.identificacion2 ? value : values.identificacion2}
          name='hemocultivo_x2.identificacion2'
          value={value}
          onChange={onChange}
          muestra
        />
        <Remarks
          value={!values?.remarks3 ? value : values.remarks3}
          name='hemocultivo_x2.remarks3'
          register={register}
        />
        <h3>Antibiograma</h3>

        {antibiograma.map(({ name, type, placeholder, map }) => {
          return (
            <Input
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
        <Remarks
          value={!values?.remarks4 ? value : values.remarks4}
          name='hemocultivo_x2.remarks4'
          register={register}
        />
      </section>
    </>
  )
}
