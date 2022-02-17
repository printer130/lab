export function Remarks ({ name, onChange, value, register, pdf }) {
  return (
    <div className='w-full'>
      <label>
        <h3>Observaciones</h3>
        <textarea
          name={name}
          {...register(name)}
          onChange={onChange}
          value={value}
          rows='3'
          className={`w-full resize-none border border-gray-300 rounded-lg text-base px-[0.35rem] pt-[0.15rem] ${pdf && 'border-none h-fit bg-transparent text-xs'}`}
          readOnly={value?.length > 0}
        />
      </label>
    </div>
  )
}
