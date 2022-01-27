import dynamic from 'next/dynamic'

import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
  StyleSheet
} from '@react-pdf/renderer'

import useSWR from 'swr'
function register (name, options) {
  const onChange = function (e) {}
  return { name, onChange, ...options }
}
const LazyComponent = ({ data }) => {
  console.log('data', data)

  return (
    <>
      {data?.json.map(item => {
        const Lazy = dynamic(
          () => import(`../../components/Bio/Compounds/${item.name}.js`),
          {
            ssr: false,
            suspense: false
          }
        )
        return <Lazy key={item.name} register={register} pdf />
      })}
    </>
  )
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  a: {
    backgroundColor: '#61DAFB',
    padding: '.3rem .45rem',
    borderRadius: '7px',
    color: '#252525',
    fontSize: '1rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
})

function MyDocument ({ data }) {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <View style={styles.container}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.container}>
            <LazyComponent data={data} />
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default function Pdf () {
  const isServer = typeof window === 'undefined'
  const { data, loading } = useSWR('/api/receipt/getOne')
  console.log(data?.data[0]?.json[0].values)
  // register={register}
  // name={name}
  // values={values}
  // required
  // pdf={pdf}
  const Tpinr = dynamic(
    () => import('../../components/Bio/Compounds/tp_inr.js'),
    {
      ssr: false,
      suspense: false
    }
  )
  function DucomentImport () {
    return (
      <Document>
        <Page size='A4' style={styles.page}>
          <View style={styles.section}>
            <View style={styles.container}>
              <Text>Section #1</Text>
            </View>
            <Text style={styles.container}>
              <Tpinr
                register={register}
                name='tp_inr'
                values={data?.data[0]?.json[0].values}
                required
                pdf
              />
            </Text>
          </View>
        </Page>
      </Document>
    )
  }
  return (
    <>
      <h1>hola</h1>
      {!isServer && (
        <PDFDownloadLink
          document={<DucomentImport />}
          fileName='somename.pdf'
          style={styles.a}
        >
          {({ blob, url, loading, error }) => {
            return <>{loading ? 'Loading document...' : 'Download PDF'}</>
          }}
        </PDFDownloadLink>
      )}
      {/* {!isServer && (
        <PDFDownloadLink
          document={<MyDocument data={data?.data[0]} />}
          fileName='somename.pdf'
          style={styles.a}
        >
          {({ blob, url, loading, error }) => {
            return <>{loading ? 'Loading document...' : 'Download PDF'}</>
          }}
        </PDFDownloadLink>
      )} */}
    </>
  )
}
