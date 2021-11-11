import { getFirestore, addDoc, collection, doc, add, setDoc } from 'firebase/firestore'

const db = getFirestore()

// const ordersRef = collection(db, 'orders', `${ci}`)
// export async function addNewOrder (data) {
//   const { ci } = data

//   return await addDoc(collection(db, `${ci}`), data)
// }

export async function addNewOrder (data) {
  const { ci, creationDate } = data
  const docRefByCI = await doc(db, `${ci}`, `${creationDate}`)

  return await setDoc(docRefByCI, data, { merge: true })
}
