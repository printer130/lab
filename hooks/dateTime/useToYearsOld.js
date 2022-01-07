// const date = 'Wen Dec 01 2000 20:00:00 GMT-0400 (Bolivia Time)'

export const useToYearsOld = (date) => {
  const a = new Date(date)
  const cumple = new Intl.DateTimeFormat().format(a)
  const birthday = new Date(cumple).getTime()

  const today = Date.now() // Hora en milisegundos
  const compare = (today - birthday)
  const age = Math.floor(compare / 31536000000)

  return age
}
