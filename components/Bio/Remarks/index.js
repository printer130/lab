import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  title: {
    fontSize: 14
  },
  value: {
    fontSize: 12
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    flexWrap: 'wrap'
  }
})
export function Remarks ({ name, onChange, value, register, pdf }) {
  return (
    <div>
      {!pdf
        ? (
          <label>
            <h5>Observaciones</h5>
            <textarea
              name={name}
              {...register(name)}
              onChange={onChange}
              value={value}
              rows='5'
            />
          </label>
          )
        : (
          <View style={styles.container}>
            <Text style={styles.title}>Observaciones: </Text>
            <Text style={styles.value}>{value}</Text>
          </View>
          )}
      <style jsx>
        {`
          div {
            width: 100%;
          }
          textarea {
            resize: none;
            width: 100%;
            padding: 0.15rem 0.35rem;
            letter-spacing: 0.5px;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  )
}
