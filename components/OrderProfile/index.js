import { Input } from 'components'

export const OrderProfile = ({
  fullName,
  nit,
  total,
  phone,
  birth,
  socialReason,
  onIndebtChecked,
  onIndebtChange,
  ci,
  checked,
  indebt
}) => {
  return (
    <fieldset>
      <legend>
        <h2> {fullName} </h2>
      </legend>
      <div>
        <p>
          <strong>Carnet de identidad:</strong> {ci}
        </p>
        <p>
          <strong>Edad: </strong>
          {birth}
        </p>
        <p>
          <strong>A Cuenta:</strong>
          <input
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
          {total} Bs.
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
        p {
          width: 295px;
          height: fit-content;
        }
      `}
      </style>
    </fieldset>
  )
}
