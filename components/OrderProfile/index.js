export const OrderProfile = ({
  fullName,
  total,
  birth,
  onIndebtChange,
  ci,
  indebt
}) => {
  return (
    <fieldset className='mb-7 mt-5'>
      <legend>
        <strong className='text-xl'> {fullName} </strong>
      </legend>
      <div className='mt-6 flex w-full items-center justify-between flex-wrap'>
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
            className='items-center h-8 w-[186px] max-w-[169px] border-solid border border-[#252525] bg-[#f5f5f5] rounded-lg py-[.35rem] px-[.75rem]'
            type='number'
            min={0}
            onChange={onIndebtChange}
            max={200}
            placeholder='0 Bs.'
          />
        </p>
        <p>
          <strong>Total: </strong>
          <span>{total} Bs.</span>
        </p>
        <p>
          <strong>Saldo: </strong> {indebt} Bs.
        </p>
      </div>
      <style jsx>
        {`
        input {
          letter-spacing: .75px;
        }

        p {
          width: 320px;
          min-width: 220px;
          height: 43px;
        }

        p:nth-child(3) {
          display: flex;
          width: fit-content;
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
