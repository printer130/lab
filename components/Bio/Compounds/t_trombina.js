import { IdentificacionDelGermen } from '../Identificacion'
import { Remarks } from '../Remarks'

export default function TincionDeGram ({
  register,
  values,
  value,
  onChange,
  pdf = null
}) {
  return (
    <>
      <h2>Tincion de Gram</h2>
      <h3>Identificación del Germen</h3>
      <IdentificacionDelGermen
        muestra
        pdf={pdf}
        register={register}
        onChange={onChange}
        values={!values?.identificacion ? value : values.identificacion}
        name='t_trombina.identificacion'
      />

      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        register={register}
        name='t_trombina.remarks'
      />
    </>
  )
}
