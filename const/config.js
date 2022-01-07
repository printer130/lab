export const URL_CALLBACK =
  process.env.NODE_ENV === 'production'
    ? 'https://pedro-farmacias.vercel.app/registro'
    : 'http://localhost:3000/registro'
export const SIGN_OUT =
  process.env.NODE_ENV === 'production'
    ? 'https://pedro-farmacias.vercel.app/'
    : 'http://localhost:3000/'
