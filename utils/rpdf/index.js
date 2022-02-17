import React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'
import { LazyBio } from 'components/LazyBio'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  }
})

function register (name, options) {
  const onChange = function (e) {}
  return { name, onChange, ...options }
}
// Create Document Component
export const Doc = ({ data }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          {data?.json.map(item => {
            return (
              <Text key={item.name}>
                <LazyBio
                  name={item.name}
                  register={register}
                  values={item.values}
                >jsakndkjas
                </LazyBio>
              </Text>
            )
          })}
        </View>
      </Page>
    </Document>
  )
}

export function RendererPDFButton ({ data }) {
  return (
    <PDFDownloadLink document={<Doc data={data} />} fileName='somename.pdf'>
      {({ blob, url, loading, error }) => (loading ? 'cargando pdf...' : 'Descargar PDF')}
    </PDFDownloadLink>
  )
}
