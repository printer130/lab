import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'

export default function CultivoDeFaringea ({
  onChange,
  register,
  value,
  values,
  pdf
}) {
  const antibio = values?.antibiograma ?? false
  return (
    <>
      <h2>Cultivo de Faringea</h2>
      <h3>Identificación del Germen</h3>
      <section className='section'>
        <IdentificacionDelGermen
          pdf={pdf}
          register={register}
          value={value}
          onChange={onChange}
          name='cultivo_sec_far_ngea_o_traqueal.identificacion_del_germen'
          values={
            !values?.identificacion_del_germen
              ? value
              : values.identificacion_del_germen
          }
        />
        <IdentificacionDelGermen
          register={register}
          value={value}
          pdf={pdf}
          onChange={onChange}
          name='cultivo_sec_far_ngea_o_traqueal.identificacion_del_germen_2'
          values={
            !values?.identificacion_del_germen_2
              ? value
              : values.identificacion_del_germen_2
          }
        />
      </section>
      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        name='cultivo_sec_far_ngea_o_traqueal.remarks'
        register={register}
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
              name={`cultivo_sec_far_ngea_o_traqueal.antibiograma.${map}`}
            >
              {name}
            </Input>
          )
        })}
      </section>
      <Remarks
        pdf={pdf}
        value={!values?.remarks2 ? value : values.remarks2}
        name='cultivo_sec_far_ngea_o_traqueal.remarks2'
        register={register}
      />
    </>
  )
}
