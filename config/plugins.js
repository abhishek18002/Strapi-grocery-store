module.exports = ({ env }) => ({
    email: {
      provider: 'smtp',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: env('abhisheksajjanar2022@gmail.com'),
          pass: env('123456789'),
        },
      },
      settings: {
        defaultFrom: 'abhisheksajjanar2022@gmail.com',
        defaultReplyTo: 'abhisheksajjanar2022@gmail.com',
      },
    },
  });
  