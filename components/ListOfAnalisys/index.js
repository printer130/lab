import { Input } from 'components'

export const ListOfAnalisys = ({ list, onChange, title }) => {
  return (
    <>
      <div>
        <h3> {title} </h3>
        {list.map(({ value, price, map }) => (
          <Input
            price={price}
            name={map}
            key={value}
            onChange={onChange}
            type='checkbox'
          >
            {value}
          </Input>
        ))}
      </div>
      <style jsx>
        {`
          div {
            width: 270px;
            display: inline-block;
            margin-bottom: 0.5rem;
          }
        `}
      </style>
    </>
  )
}
