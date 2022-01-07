import { Input } from '../Input'

export function NegativePositive ({ values, register, name, n, p }) {
  // console.log(values && values[name] === 'positivo')
  // const isNegativo = values[name] === 'negativo'
  // const isPositivo = values[name] === 'positivo'

  return (
    <>
      <Input
        checked={values === 'negativo' || values === n}
        value={!n ? 'negativo' : n}
        register={register}
        name={name}
        type='radio'
      >
        {!n ? 'Negativo' : n}
      </Input>
      <Input
        checked={values === 'positivo' || values === p}
        value={!p ? 'positivo' : p}
        register={register}
        name={name}
        type='radio'
      >
        {!p ? 'Positivo' : p}
      </Input>
    </>
  )
}
