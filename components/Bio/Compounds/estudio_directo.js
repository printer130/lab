import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { IdentificacionDelGermen } from '../Identificacion'

export default function EstudioDirecto ({ onChange, register, value, values }) {
  return (
    <>
      <h2>Estudio Directo</h2>
      <h3>Identificación del Germen</h3>

      <section className='section'>
        <Input
          value={!values?.muestra ? value : values.muestra}
          register={register}
          onChange={onChange}
          type='text'
          placeholder='muestra...'
          name='estudio_directo.muestra'
        >
          Muestra
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
          name='estudio_directo.identificacion_del_germen'
        />
      </section>
      <Remarks
        value={!values?.remarks ? value : values.remarks}
        name='estudio_directo.remarks'
        register={register}
      />
    </>
  )
}
