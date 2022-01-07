import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'
import { GramZielhlTinciones } from '../Gram_zielhl_tinciones'

export default function CultivoVaginal ({ onChange, register, value, values }) {
  const antibio = values?.antibiograma ?? false
  return (
    <>
      <section>
        <h2>Cultivo de Secreción Vaginal</h2>
        <h3>Identificación del Germen</h3>
        <GramZielhlTinciones
          register={register}
          value={value}
          values={values?.gram_zielhl_tinciones}
          onChange={onChange}
          name='cultivo_de_sec_vaginal.gram_zielhl_tinciones'
        />

        <Input
          value={!values?.ph_vaginal ? value : values.ph_vaginal}
          register={register}
          onChange={onChange}
          type='text'
          placeholder='ph vaginal...'
          name='cultivo_de_sec_vaginal.ph_vaginal'
        >
          pH Vaginal
        </Input>

        <IdentificacionDelGermen
          register={register}
          value={value}
          values={
            !values?.identificacion_del_germen
              ? value
              : values.identificacion_del_germen
          }
          onChange={onChange}
          name='cultivo_de_sec_vaginal.identificacion_del_germen'
        />

        <IdentificacionDelGermen
          register={register}
          value={value}
          values={
            !values?.identificacion_del_germen_2
              ? value
              : values.identificacion_del_germen_2
          }
          onChange={onChange}
          name='cultivo_de_sec_vaginal.identificacion_del_germen_2'
        />

        <Remarks
          value={!values?.remarks ? value : values.remarks}
          name='cultivo_de_sec_vaginal.remarks'
          register={register}
        />

        <h3>Antibiograma</h3>

        {antibiograma.map(({ name, type, placeholder, map }) => {
          return (
            <Input
              key={map}
              register={register}
              onChange={onChange}
              value={!antibio ? value : antibio[map]}
              name={`cultivo_de_sec_vaginal.antibiograma.${map}`}
              placeholder={placeholder}
              type={type}
            >
              {name}
            </Input>
          )
        })}
        <Remarks
          value={!values?.remarks2 ? value : values.remarks2}
          name='cultivo_de_sec_vaginal.remarks2'
          register={register}
        />
      </section>
    </>
  )
}
