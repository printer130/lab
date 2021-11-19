
export const OrderProfile = ({
  fullName,
  nit,
  ordenNumber,
  phone,
  socialReason,
  ci
}) => {
  return (
    <>
      <div>
        <h2>Nuevo registro: {fullName}</h2>
        <p><strong>Carnet de identidad:</strong> {ci}</p>
        <p><strong>NIT:</strong> {nit}</p>
        <p><strong>Nro de Orden: </strong>{ordenNumber}</p>
        <p><strong>Celular: </strong>{phone}</p>
        <p><strong>Razon Social: </strong>{socialReason}</p>
      </div>
    </>
  )
}
