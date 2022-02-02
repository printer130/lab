export function Remarks ({ name, onChange, value, register, pdf }) {
  return (
    <div>
      <label>
        <h5>Observaciones</h5>
        <textarea
          name={name}
          {...register(name)}
          onChange={onChange}
          value={value}
          rows='5'
        />
      </label>
      )
      <style jsx>
        {`
          div {
            width: 100%;
          }
          textarea {
            resize: none;
            width: 100%;
            padding: 0.15rem 0.35rem;
            letter-spacing: 0.5px;
            font-size: 1rem;
            border: 1px solid #eee;
            border-radius: 7px;
          }
        `}
      </style>
    </div>
  )
}
