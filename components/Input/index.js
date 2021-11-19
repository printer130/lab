import { ErrorMessage } from 'components'
import { forwardRef } from 'react'

export const Input = forwardRef(({
  errors: error,
  onChange,
  type,
  name,
  checked,
  label,
  placeholder,
  children
}, ref) => {
  return (
    <>
      <label>
        <strong> {children} </strong>
        <input
          onChange={onChange}
          name={name}
          checked={checked}
          label={label}
          ref={ref}
          type={type}
          placeholder={placeholder}
        />
        <ErrorMessage>{error?.message}</ErrorMessage>
      </label>
      <style jsx>{`
      label {
        display: flex;
        margin: 0 auto;
        justify-content: left;
        align-items: ${type !== 'checkbox' ? 'start' : 'center'};
        flex-direction: ${type !== 'checkbox' ? 'column' : 'row-reverse'};
      }

      strong {
        margin: ${type !== 'checkbox' ? '0' : '0 .75rem'};
        font-weight: 600;
        align-items: center;
      }

      input {
        flex-direction: ${type !== 'checkbox' ? 'column' : 'row-reverse'};
        letter-spacing: .75px;
        align-items: center;
        height: 33px;
        max-width: 189px;
        min-width: 189px;
        width: 189px;
        padding: .35rem .75rem;
        flex-direction: initial;
        margin: ${type !== 'checkbox' ? '.75rem 0 1.5rem 0' : '.7rem .15rem'};
        border: ${error ? '1px solid #f00' : '.35px solid #101010'}
       }

       input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
       }

       input[type=date] {
        width: -webkit-fill-available;
       }
    `}
      </style>
    </>
  )
})
