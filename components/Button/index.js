
export const Button = ({
  isValid = !false,
  isDirty = !false,
  isSubmitting,
  children,
  onChange
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
          pointer-events: ${!isValid || !isDirty ? 'none' : ''};
          border: none;
          margin: .55rem 0;
          border-radius: 7px;
          width: 100%;
          cursor: pointer;
          max-width: 227px;
          padding: .45rem .75rem;
        }
     `}
      </style>
    </>
  )
}
