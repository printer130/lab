import { Order } from 'components/Order'
import { unique } from 'utils/unique'

export const ListOfOrders = ({ data, onEdit }) =>
  data.map(
    ({
      id,
      fullName,
      saldo,
      total,
      indebt,
      itotal,
      labName,
      cu,
      createdAt,
      ownerCi
    }) => {
      return (
        <Order
          key={cu + id}
          cu={cu}
          date={createdAt}
          acuenta={indebt}
          itotal={itotal}
          fullname={fullName}
          total={total}
          id={unique({ id, labName, ownerCi })}
          saldo={saldo}
        />
      )
    }
  )
