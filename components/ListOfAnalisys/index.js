import { Input } from 'components'

export const ListOfAnalisys = ({
  listOfAnalisys,
  onChange,
  title
}) => {
  return (
    <>
      <div>
        <h3> {title} </h3>
        {
      listOfAnalisys.map(word =>
        <Input
          name={word}
          key={word}
          onChange={onChange}
          type='checkbox'
        > {word}
        </Input>)
     }
      </div>
      <style jsx>{`
      div {
        height: fit-content;
      }
    `}
      </style>
    </>
  )
}
