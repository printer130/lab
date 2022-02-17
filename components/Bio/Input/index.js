import { forwardRef } from 'react'

export const Input = forwardRef(
  (
    {
      placeholder,
      value,
      type,
      checked,
      children,
      name,
      pdf,
      register,
      required = false,
      measure
    },
    ref
  ) => {
    return (
      <label className={`${type === 'radio' ? 'w-fit flex' : 'w-[270px]'} ${pdf && 'mt-4'} `}>
        <h5 className='w-[inherit] py-0 pl-0 pr-4'>{children}</h5>
        <div className={`flex max-w-xs ${type === 'radio' ? 'self-center' : ''}`}>
          <input
            className={`h-min text-base w-[auto] rounded py-[0.15rem] px-[0.35rem] border border-solid border-slate-400 ${pdf && 'border-none bg-transparent pointer-events-none user-select-none px-0 pdf_input text-slate-900'}`}
            step='.001'
            checked={checked}
            value={value}
            ref={ref}
            name={name}
            {...register(name, { required })}
            type={type}
            required={required}
            placeholder={placeholder}
          />
          {measure && <p className={`m-0 w-11 ${pdf && 'self-center'}`}>{measure}</p>}
        </div>
      </label>
    )
  }
)
