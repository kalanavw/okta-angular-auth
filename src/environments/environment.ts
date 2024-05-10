export const environment = {
  production: false,
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  clientId: '${yourClientID}',
  redirectUri: window.location.origin + '/login/callback',
  postLogoutUri: window.location.origin + '/sign-out',
}

