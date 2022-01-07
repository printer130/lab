
export const Button = ({
  isValid = !false,
  isDirty = !false,
  isSubmitting,
  children,
  onChange,
  className
}) => {
  return (
    <>
      <button
        onClick={onChange}
        disabled={!isValid || !isDirty}
      >
        {children}
      </button>
      <style jsx>{`
        button {
          display:${className ? 'none' : 'block'};
          pointer-events: ${!isValid || !isDirty ? 'none' : 'auto'};
          border: .5px solid black;
          margin: .55rem 0;
          border-radius: 7px;
          background: #d2f2ff;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          letter-spacing: .5px;
          max-width: 270px;
          min-width: 189px;
          padding: .45rem .75rem;
        }
        button:disabled {
          border: .5px solid #ccc;
        }
     `}
      </style>
    </>
  )
}
