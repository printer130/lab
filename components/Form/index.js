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
  const formInputs = REGISTER_VALUES({ errors })
  const zzz = loading ? '.4' : '1'
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset disabled={!!loading}>
          <legend>Orden: </legend>
          {
            formInputs.map(({
              error,
              name,
              type,
              placeholder,
              options,
              label
            }) => (
              <Input
                errors={error}
                key={name}
                type={type}
                placeholder={placeholder}
                {
                 ...register(name, options)
                }
              >
                {label}
              </Input>
            ))
          }
          <Button
            isValid={isValid}
            isDirty={isDirty}
          >
            Guardar
          </Button>
        </fieldset>

      </form>
      <style jsx>{`
        fieldset {
         display: flex;
         min-width: 220px;
         flex-wrap: wrap;
         margin: 0 auto;
         max-width: 650px;
         opacity: ${zzz};
         user-select: ${zzz};
         pointer-events: ${zzz}
       }
     `}
      </style>
    </>
  )
}
