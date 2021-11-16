import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from 'firebase/firestore'

const db = getFirestore()

const normalizedOrder = (data) => {
  const values = {
    ...data,
    createdAt: Date.now()
  }
  return { values }
}

const getRefFromOrder = async (values) => {
  const { ci, createdAt } = values
  return await doc(db, `${ci}`, `${createdAt}`)
}

export async function addNewOrder (data) {
  const { values } = normalizedOrder(data)
  const docRefByCI = await getRefFromOrder(values)
  return await setDoc(docRefByCI, values, { merge: true })
}

export async function getDocByCI ({ ci }) {
  const docRef = await doc(db, ci, '1636673609.359')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    return docSnap.data()
  }

  console.log('No document found:')
  return null
}
