import { forwardRef } from 'react'

export const Input = forwardRef(({
  errors: error,
  onChange,
  type,
  name,
  label,
  placeholder,
  children
}, ref) => {
  return (
    <>
      <label>
        <p> {children} </p>
        <input
          onChange={onChange}
          name={name}
          label={label}
          ref={ref}
          type={type}
          placeholder={placeholder}
        />
      </label>
      <style jsx>{`
      label {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 35px;
        flex-direction: row-reverse;
      }
      input {
        margin: 1.75rem 0;
        border: ${error ? '1px solid #f00' : 'none'}
       }
    `}
      </style>
    </>
  )
})
