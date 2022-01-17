import { Button, Input } from 'components'
import { REGISTER_VALUES } from './values'
export const Form = ({
  handleSubmit,
  onSubmit,
  loading,
  isDirty,
  isValid,
  errors,
  register
}) => {
  // const { onChange } = register()
  const formInputs = REGISTER_VALUES({ errors })
  const zzz = loading ? '.4' : '1'
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={!!loading}>
          <legend>
            <h1>Orden:</h1>
          </legend>
          <div>
            <strong>Sexo:</strong>
            <select {...register('sex')} required>
              <option value='female'>Femenino</option>
              <option value='male'>Masculino</option>
            </select>
            {formInputs.map(
              ({ error, name, type, placeholder, options, label }) => {
                return (
                  <Input
                    errors={error}
                    key={name + label}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, options)}
                  >
                    {label}
                  </Input>
                )
              }
            )}
            <Button isValid={isValid} isDirty={isDirty}>
              Guardar
            </Button>
          </div>
        </fieldset>
      </form>
      <style jsx>
        {`
          form {
            max-width: 900px;
            margin: 0 auto;
          }
          div {
            display: flex;
            min-width: 220px;
            width: 220px;
            flex-wrap: wrap;
            opacity: ${zzz};
            user-select: ${zzz};
            margin: 0 auto;
            pointer-events: ${zzz};
          }
          select {
            width: 100%;
            margin: 0 auto;
            padding: 0.35rem;
            margin-bottom: 15px;
          }
          strong {
            margin-bottom: 12px;
            font-weight: 600;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}
