import { forwardRef } from 'react'

export const Input = forwardRef(({ errors: error, onChange, type, name, label, placeholder }, ref) => {
  return (
    <>
      <input
        onChange={onChange}
        name={name}
        label={label}
        ref={ref}
        type={type}
        placeholder={placeholder}
        autoFocus
      />
      <style jsx>{`
      input {
        display: block;
        margin: 1rem 0;
        border: ${error ? '1px solid #f00' : 'none'}
       }
    `}
      </style>
    </>
  )
})
