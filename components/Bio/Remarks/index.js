export function Remarks ({ name, onChange, value, register }) {
  return (
    <div>
      <label>
        <h3>Observaciones</h3>
        <textarea
          name={name}
          {...register(name)}
          onChange={onChange}
          value={value}
          rows='3'
          readOnly={value?.length > 0}
        />
      </label>
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
