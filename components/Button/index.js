export const Button = ({
  isValid = !false,
  isDirty = !false,
  children,
  onChange,
  className,
  order,
  fixed
}) => {
  return (
    <>
      <button onClick={onChange} disabled={!isValid || !isDirty}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            position: ${fixed ? 'fixed' : 'static'};
            display: ${className ? 'none' : 'block'};
            pointer-events: ${!isValid || !isDirty ? 'none' : 'auto'};
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
          }
        `}
      </style>
    </>
  )
}
