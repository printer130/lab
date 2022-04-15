import novavid from 'reagents/novavid.json'

export const useReferenceValue = ({ value, sex }) => {
  // const { data } = useSWR(`/api/reference_values/${value}`)
  // const data = useSWR('/reagents/novavid.json')
  const normalized = {
    fullname: novavid[value]?.name,
    name: novavid[value]?.reagent_name,
    measurement: novavid[value]?.reagent_measurement,
    reference: novavid[value]?.reference_value[sex] ?? novavid[value]?.reference_value.default,
    brand: novavid[value]?.reagent_brand,
    full_reference: novavid[value]?.full_reference
  }

  return {
    data: normalized
  }
}
