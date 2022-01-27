import { Input } from '../Input'

export function IdentificacionDelGermen ({
  register,
  value,
  onChange,
  name,
  muestra,
  values,
  pdf = null
}) {
  return (
    <>
      {muestra && (
        <Input
          value={!values?.muestra ? value : values.muestra}
          register={register}
          onChange={onChange}
          name={`${name}.muestra`}
          placeholder='Muestra...'
          type='text'
          pdf={pdf}
        >
          Muestra
        </Input>
      )}
      <Input
        value={
          !values?.germen_identificado ? value : values.germen_identificado
        }
        register={register}
        onChange={onChange}
        pdf={pdf}
        name={`${name}.germen_identificado`}
        placeholder='Germen Identificado...'
        type='text'
      >
        Germen Identificado:
      </Input>
      <Input
        value={
          !values?.recuento_de_colonias ? value : values.recuento_de_colonias
        }
        register={register}
        onChange={onChange}
        measure='UFC/mL'
        name={`${name}.recuento_de_colonias`}
        placeholder='Recuento de colonias...'
        type='number'
        pdf={pdf}
      >
        Recuento de colonias:
      </Input>
    </>
  )
}
