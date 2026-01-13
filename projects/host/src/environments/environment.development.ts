export const environment = {
  production: false,
  microFrontends: {
    products: 'http://localhost:4201/remoteEntry.json',
    // admin: 'http://localhost:4301/remoteEntry.json',
    // vesselDesigner: 'http://localhost:4303/remoteEntry.json',
    // documentation: 'http://localhost:4302/remoteEntry.json'
  },
  federationManifestFileName: 'federation.manifest.development.json'
};