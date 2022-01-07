export function Search ({ value, onChange, onSubmit, children, placeholder }) {
  return (
    <>
      <input
        type='search'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <style jsx>{`
      input {
          width: 100%;
          max-width: 500px;
          padding: .4rem .6rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }
      `}
      </style>
    </>
  )
}
