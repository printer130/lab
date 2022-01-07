import { Input } from '../Input'

export function IdentificacionDelGermen ({
  register,
  value,
  onChange,
  name,
  muestra,
  values
}) {
  console.log('values', values)
  return (
    <>
      {muestra && (
        <Input
          value={
            !values?.muestra
              ? value
              : values.muestra
          }
          register={register}
          onChange={onChange}
          name={`${name}.muestra`}
          placeholder='Muestra...'
          type='text'
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
      >
        Recuento de colonias:
      </Input>
    </>
  )
}
