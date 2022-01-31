export const Button = ({
  isValid = !false,
  isDirty = !false,
  children,
  onChange,
  className,
  order
}) => {
  return (
    <>
      <button onClick={onChange} disabled={!isValid || !isDirty}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            display: ${className ? 'none' : 'block'};
            pointer-events: ${!isValid || !isDirty ? 'none' : 'auto'};
            border: 0.5px solid black;
            margin: 0.55rem 0;
            border-radius: 7px;
            background: #d2f2ff;
            width: 100%;
            font-weight: bold;
            cursor: pointer;
            color: #252525; 
            order: ${!order ? 'inherit' : '9'};
            letter-spacing: 0.5px;
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
