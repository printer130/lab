export const Button = ({
  isValid = !false,
  isDirty = !false,
  children,
  onChange,
  className,
  order,
  fixed,
  disable,
  isFetched
}) => {
  return (
    <>
      <button onClick={onChange} disabled={!disable ? (!isValid || !isDirty || isFetched) : false}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            position: ${fixed ? 'fixed' : 'static'};
            display: ${className ? 'none' : 'block'};
            pointer-events: ${!disable ? (!isValid || !isDirty) ? 'none' : 'auto' : 'auto'};
            margin: 0.55rem 0;
            top: 100px;
            border-radius: 7px;
            background: #1a90c0;
            width: 100%;
            cursor: pointer;
            color: #eee; 
            order: ${!order ? 'inherit' : '9'};
            max-width: 270px;
            min-width: 189px;
            padding: 0.45rem 0.75rem;
          }

          button:disabled {
            border: 0.5px solid #ccc;
            opacity: 0.5;
            pointer-events: none;
          }
        `}
      </style>
    </>
  )
}
