import createAuth0Client from '@auth0/auth0-spa-js'

let auth

const initialiseAuth = async () => {
  const auth = await createAuth0Client({
    domain: process.env.REACT_APP_DOMAIN,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: 'http://localhost:3000/',
  })

  return auth
}

export const testAuth = () => async (dispatch, state) => {
  console.log('hey there')

  auth = await initialiseAuth()

  await auth.loginWithRedirect()
}
