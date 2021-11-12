import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore'

const db = getFirestore()

export async function addNewOrder (data) {
  const { ci, creationDate } = data
  const docRefByCI = await doc(db, `${ci}`, `${creationDate}`)

  return await setDoc(docRefByCI, data, { merge: true })
}

export async function getDocByCI ({ ci }) {
  const docRef = await doc(db, ci, '1636673609.359')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    return docSnap.data()
  }

  return 'No hay data'
}
