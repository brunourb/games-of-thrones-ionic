export const environment = {
  production: false,
  apiUrl: 'https://thronesapi.com/api/v2/',
  authorizationUrl: 'https://3.227.169.86:9443/api/identity/entitlement/decision',
  apiPortalRS: '/acesso-usuario-api',
  appName: 'App Ionic - Game of Thrones',
  sso: {
    //OAuth Client Key | Auth code
    clientId: 'LHoCr0PvVccdnTNgUKkGf0rfSqca',
    serverUrl: 'https://3.227.169.86:9443',
    issuer: '/oauth2/oidcdiscovery',
    redirectUri: window.location.origin,
    scope: 'openid email profile',
    showDebugInformation: true,
    responseType: 'code',
  }
};