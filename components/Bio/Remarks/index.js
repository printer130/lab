export function Remarks ({ name, onChange, value, register }) {
  return (
    <div>
      <label>
        Observaciones
        <textarea
          readOnly={value?.length > 1}
          name={name}
          {...register(name)}
          onChange={onChange}
          value={value}
          rows='5'
        />
      </label>
    </div>
  )
}
