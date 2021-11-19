import { app, firebaseConfig } from './client'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from '@firebase/app'

app ?? initializeApp(firebaseConfig)
export const auth = getAuth()

export const emailAndPassword = ({ email, password, setError }) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      return mapUserFromFirebase(user)
    })
    .catch(error => {
      return setError('auth', {
        message: 'Contraseña incorrecta',
        error: error.message
      })
    }
    )
}

export const onAuthStateChange = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebase(user) : null
    onChange(normalizedUser)
  })
}

const mapUserFromFirebase = (user) => {
  const { email, accessToken, displayName } = user
  const userNormalized = {
    email,
    accessToken,
    displayName
  }
  return userNormalized
}

export const onSignOut = () => {
  return auth.signOut()
    .then(
      res => console.log('Session Cerrada')
    ).catch(err => console.log(err))
}
