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
      measure,
      pdf = null
    },
    ref
  ) => {
    return (
      <>
        <label>
          <h5>{children}</h5>
          <div>
            <input
              step='.001'
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
          </div>
        </label>
        )
        <style jsx>
          {`
            label {
              width: 270px;
            }
            h5 {
              padding: 0 2rem 0 0;
            }
            div {
              max-width: 320px;
              display: flex;
            }
            input {
              padding: 0.15rem 0.35rem;
              border: 1px solid #ccc;
              border-radius: 4px;
              width: auto;
              font-size: 1rem;
              height: min-content;
            }
            p {
              margin: 0;
              width: 45px;
            }
          `}
        </style>
      </>
    )
  }
)
// export default forwardRef(Input)
