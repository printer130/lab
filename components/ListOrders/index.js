import { Order } from 'components/Order'
import { unique } from 'utils/unique'

export const ListOfOrders = ({ data }) =>
  data.map(
    ({
      id,
      fullName,
      saldo,
      total,
      onDelete,
      indebt,
      itotal,
      cuiid,
      labName,
      createdAt,
      ownerCi
    }) => {
      return (
        <Order
          key={cuiid}
          cuiid={cuiid}
          date={createdAt}
          acuenta={indebt}
          itotal={itotal}
          fullname={fullName}
          total={total}
          onDelete={onDelete}
          id={unique({ id, labName, ownerCi, cuiid })}
          saldo={saldo}
        />
      )
    }
  )
