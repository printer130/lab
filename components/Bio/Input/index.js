import { forwardRef } from 'react'
export const Input = forwardRef(
  (
    {
      placeholder,
      value,
      type,
      checked,
      children,
      name,
      register,
      required = false,
      measure
    },
    ref
  ) => {
    return (
      <label>
        <small>{children}</small>
        <input
          step='.01'
          checked={checked}
          value={value}
          ref={ref}
          name={name}
          {...register(name, { required })}
          type={type}
          required={required}
          placeholder={placeholder}
        />
        {measure && <p>{measure}</p>}
      </label>
    )
  }
)
// export default forwardRef(Input)
