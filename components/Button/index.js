
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
          width: 100%;
          cursor: pointer;
          max-width: 167px;
        }
     `}
      </style>
    </>
  )
}
