import { app, firebaseConfig } from './client'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from '@firebase/app'

app ?? initializeApp(firebaseConfig)
export const auth = getAuth()

export const emailAndPassword = ({ email, password, laboratory, setError }) => {
  console.log({ email, password, laboratory })
  return signInWithEmailAndPassword(auth, email, password)
    .then(user => mapUserFromFirebase(user, laboratory))
    .catch((error) => {
      setError('auth', {
        message: 'Contraseña incorrecta',
        error
      })
    })
}

export const onAuthStateChange = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebase(user) : null
    onChange(normalizedUser)
  })
}

const mapUserFromFirebase = (user, laboratory) => {
  const { email, accessToken, displayName } = user
  return {
    email,
    accessToken,
    laboratory,
    displayName
  }
}

export const onSignOut = () => {
  return auth.signOut()
    .then(
      res => console.log('Session Cerrada')
    ).catch(err => console.log(err))
}
