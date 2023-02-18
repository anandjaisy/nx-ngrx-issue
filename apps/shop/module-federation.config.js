module.exports = {
  name: 'shop',
  exposes: {
    './Routes': 'apps/shop/src/app/remote-entry/entry.routes.ts',
  },
};
