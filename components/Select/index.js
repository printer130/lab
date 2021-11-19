import { forwardRef } from 'react'

export const Select = forwardRef(({ onChange, name, label }, ref) => (
  <>
    <label>
      {label}
      <div>
        <select name={name} ref={ref} onChange={onChange}>
          <option value='laboratorio1'>laboratorio1</option>
          <option value='laboratorio2'>laboratorio2</option>
          <option value='laboratorio3'>laboratorio3</option>
          <option value='laboratorio4'>laboratorio4</option>
        </select>
      </div>
    </label>
    <style jsx>{`
      select {
        width: 100%;
        padding: .15rem .55rem;
      }  
    `}
    </style>
  </>
))
