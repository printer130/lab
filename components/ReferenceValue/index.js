
export function ReferenceValue ({ measurement, reference, brand }) {
  return (
    <div className='reference_value'>
      (<p>{brand} </p>
      {measurement && <p>- {measurement}</p>}
      {reference &&
        <div>
          <p>
            <strong>- Valor: </strong>
            {reference}
          </p>
        </div>}
      )
    </div>
  )
}
