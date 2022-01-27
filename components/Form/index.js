import { Button, Input } from 'components'
import { REGISTER_VALUES } from './values'
import { MenuSearch } from 'components/MenuSearch'

export const Form = ({
  handleSubmit,
  onSubmit,
  loading,
  onClick,
  isDirty,
  onDebounce,
  debouncedSearch,
  isValid,
  errors,
  register
}) => {
  const formInputs = REGISTER_VALUES({ errors, onDebounce })

  const zzz = loading ? '.4' : '1'

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={!!loading}>
          <legend>
            <strong className='text-2xl'>Nueva Orden:</strong>
          </legend>
          <div className='relative pt-6'>
            {debouncedSearch?.data?.length > 0 && (
              <MenuSearch data={debouncedSearch} onClick={onClick} />
            )}
            <label className='w-full flex flex-col mb-6'>
              <strong>Sexo:</strong>
              <select
                className='w-100 p-1 border-zinc-900 border-solid border cursor-pointer rounded '
                {...register('sex')}
                required
              >
                <option value='female'>Femenino</option>
                <option value='male'>Masculino</option>
              </select>
            </label>
            {formInputs.map(
              ({ error, name, type, placeholder, options, label, v }) => {
                return (
                  <Input
                    v={v}
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
              {loading ? 'Guardando...' : 'Guardar'}
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
        `}
      </style>
    </>
  )
}
