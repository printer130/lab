import { ListOfAnalisys } from 'components/ListOfAnalisys'
import { DICTIONARY } from 'const/DICTIONARY'

export const DicList = ({ onChange }) => {
  return (
    <>
      <main>
        {
       DICTIONARY.map(({ title, values }) =>
         <ListOfAnalisys
           key={title}
           onChange={onChange}
           listOfAnalisys={values}
           title={title}
         />)
       }
      </main>
      <style jsx>{`
        main {
         display: grid;
         place-content: center;
         grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
         grid-auto-rows: minmax(20px, auto);
       }
      `}
      </style>
    </>
  )
}
