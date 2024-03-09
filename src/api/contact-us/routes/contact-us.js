module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-us',
      handler: 'contact-us.contactUsSendEmail',
      config: {
      policies: [],
      middlewares: [],
      },
    },
  ],
};
