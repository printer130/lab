import useSWR from 'swr'
import novavid from 'reagents/novavid.json'

export const useReferenceValue = ({ value, sex }) => {
  // const { data } = useSWR(`/api/reference_values/${value}`)
  // const data = useSWR('/reagents/novavid.json')
  const normalized = {
    name: novavid[value]?.reagent_name,
    measurement: novavid[value]?.reagent_measurement,
    reference: novavid[value]?.reference_value[sex],
    brand: novavid[value]?.reagent_brand
  }

  return {
    data: normalized
  }
}
