export const URL_CALLBACK =
  process.env.NODE_ENV === 'production'
    ? 'https://lab-blond.vercel.app/registro'
    : 'http://192.168.0.3:3000/registro'
export const SIGN_OUT =
  process.env.NODE_ENV === 'production'
    ? 'https://lab-blond.vercel.app/'
    : 'http://192.168.0.3:3000/'
