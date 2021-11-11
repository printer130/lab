
export const Button = ({ isValid = !false, isDirty = !false, children, onChange }) => {
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
          max-width: 167px;
        }
     `}
      </style>
    </>
  )
}
