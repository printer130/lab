import { ListOfAnalisys } from 'components/ListOfAnalisys'
import jsonData from 'const/data.json'

export const DicList = ({ onChange }) => {
  return (
    <>
      <section>
        {
        jsonData.map(({ title, list }) => {
          return (
            <ListOfAnalisys
              key={title}
              onChange={onChange}
              list={list}
              title={title}
            />
          )
        })
       }
      </section>
      <style jsx>{`
        section { 
              columns: 5 270px;
              column-gap: 0.5rem;
              margin-bottom: 2rem;
            }
        `}
      </style>
    </>
  )
}
