import { forwardRef } from 'react'
import { isEmpty } from 'utils/isEmpty'

export const Select = forwardRef(({ name, register, values }, ref) => {
  const empty = !values ?? isEmpty(values)
  return (
    <>
      {!empty ? (
        <p>
          <strong>{values}</strong>
        </p>
      ) : (
        <select ref={ref} {...register(name, { required: true })}>
          <option value='negativo'>Negativo</option>
          <option value='positivo 1/50'>Positivo 1/50</option>
          <option value='positivo 1/100'>Positivo 1/100</option>
          <option value='positivo 1/150'>Positivo 1/150</option>
        </select>
      )}
      <style jsx>
        {`
          select {
            margin-top: .35rem;
            padding: 0.25rem 0.15rem;
          }
        `}
      </style>
    </>
  )
})
