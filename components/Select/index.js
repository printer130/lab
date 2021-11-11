import { forwardRef } from 'react'

export const Select = forwardRef(({ onChange, name, label }, ref) => (
  <>
    <label>{label}</label>
    <div>
      <select name={name} ref={ref} onChange={onChange}>
        <option value='laboratorio1'>laboratorio1</option>
        <option value='laboratorio2'>laboratorio2</option>
      </select>
    </div>
    <style jsx>{`
      select {
        width: 100%;
      }  
    `}
    </style>
  </>
))
