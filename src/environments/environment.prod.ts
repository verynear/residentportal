export const environment = {
  production: true,
  api: {
    baseUrl: `${location.protocol}//api.${location.hostname === 'localhost' ? 'dev.betterleasing.com' : location.host}/resnet`
  }
};
