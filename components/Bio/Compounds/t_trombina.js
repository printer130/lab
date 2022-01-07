import { IdentificacionDelGermen } from '../Identificacion'
import { Remarks } from '../Remarks'

export default function TincionDeGram ({ register, values, value, onChange }) {
  return (
    <>
      <h2>Tincion de Gram</h2>
      <h3>identificación del Germen</h3>
      <IdentificacionDelGermen
        muestra
        register={register}
        onChange={onChange}
        value={!values?.identificacion ? value : values.identificacion}
        name='t_trombina.identificacion'
      />

      <Remarks
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='t_trombina.remarks'
      />
    </>
  )
}
