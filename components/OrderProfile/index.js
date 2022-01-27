import { Input } from 'components'

export const OrderProfile = ({
  fullName,
  total,
  birth,
  onIndebtChecked,
  onIndebtChange,
  ci,
  checked,
  indebt
}) => {
  return (
    <fieldset className='mb-7 mt-5'>
      <legend>
        <strong className='text-xl'> {fullName} </strong>
      </legend>
      <div className='mt-6'>
        <p>
          <strong>Carnet de identidad:</strong> <span>{ci}</span>
        </p>
        <p>
          <strong>Edad: </strong>
          <span>{birth}</span>
        </p>
        <p>
          <strong>A Cuenta:</strong>
          <input
            className='w-auto'
            type='number'
            min={0}
            onChange={onIndebtChange}
            max={200}
            placeholder='A cuenta...'
            disabled={checked}
          />
          <Input onChange={onIndebtChecked} type='checkbox' checked={checked} />
        </p>
        <p>
          <strong>Total: </strong>
          <span>{total} Bs.</span>
        </p>
        <p>
          <strong>Saldo: </strong> {!checked ? total : indebt}
        </p>
      </div>
      <style jsx>
        {`
        div {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        input {
          letter-spacing: .75px;
          align-items: center;
          height: 33px;
          max-width: 169px;
          width: 186px;
          border: none;
          background-color: #f5f5f5;
          padding: .35rem .75rem;
          border: 1px solid #252525
          background-color: #eee;
          border-radius: 7px;
        }

        p {
          width: 320px;
          min-width: 220px;
        }

        p:nth-child(3) {
          display: flex;
          width: fit-content;
          align-items: center;
        }

        p:nth-child(3) > strong {
          margin-right: 10px;
        }

        input:disabled {
          border: 1px solid #ccc;
          opacity: .85;
        }
      `}
      </style>
    </fieldset>
  )
}
