import { forwardRef } from 'react'

export const Input = forwardRef(
  (
    {
      errors: error,
      onChange,
      type,
      v,
      name,
      checked,
      identifier,
      price,
      image,
      autoComplete,
      min,
      placeholder,
      defaultValue,
      disabled,
      max,
      errorHeight,
      children,
      order,
      fullName
    },
    ref
  ) => {
    return (
      <>
        <label>
          <strong> {children} </strong>
          <input
            data-identifier={identifier}
            data-price={price}
            data-fullname={fullName}
            min={min}
            onChange={onChange}
            name={name}
            disabled={disabled}
            autoComplete={autoComplete?.toString()}
            max={max}
            checked={checked}
            ref={ref}
            value={(type === 'date') & !v ? defaultValue : v}
            type={type}
            required={type === 'date'}
            placeholder={placeholder}
          />
          {image && <span onClick={() => console.log('a')} />}
          {/* <ErrorMessage>{error?.message}</ErrorMessage> */}
        </label>
        <style jsx>
          {`
            label {
              order: ${order};
              display: flex;
              width: 100%;
              position:${type === 'hidden' ? 'absolute' : 'relative'};
              min-width: ${type === 'checkbox' ? '' : '100%'};
              max-width: fit-content;
              height: ${errorHeight ? '100px' : 'inherit'};
              justify-content: ${type === 'radio' ? 'center' : 'left'};
              margin-bottom: 12px;
              align-items: ${type !== 'checkbox' ? 'start' : 'center'};
              flex-direction: ${type !== 'checkbox' ? 'column' : 'row-reverse'};
            }

            strong {
              margin: ${type !== 'checkbox' ? '0' : '0 .75rem'};
              font-weight: 600;
              align-items: center;
            }

            input {
              position: ${type === 'radio' ? 'absolute' : 'relative'};
              flex-direction: ${type !== 'checkbox' ? 'column' : 'row-reverse'};
              letter-spacing: 0.75px;
              align-items: center;
              height: ${type === 'radio' ? '15px' : '33px'};
              min-width: ${type === 'checkbox' ? 'auto' : '189px'};
              width: ${type === 'checkbox' ? 'auto' : '100%'};
              max-width: 270px;
              padding: 0.35rem 0.75rem;
              border-radius: 5px;
              flex-direction: initial;
              padding-right: ${image ? '2rem' : '0'};
              margin: ${type !== 'checkbox' ? '.75rem 0' : '.35rem .15rem'};
              border: ${error ? '1px solid #f00' : '.35px solid #101010'};
              border:${disabled && '1px solid transparent'};
            }

            input[type='number']::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }

            input[type='date'] {
              width: -webkit-fill-available;
            }

            span {
              background-image: url(${image});
              position: absolute;
              right: 10px;
              top: 40px;
              width: 20px;
              height: 20px;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
            }
          `}
        </style>
      </>
    )
  }
)
