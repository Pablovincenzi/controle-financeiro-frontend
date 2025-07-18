const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'login',
  exposes: { './Module': 'apps/contas-financeiras/src/app/module/app.ts' },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
  }),
  sharedMappings: ['@sysmo-cloud/shared/data-access'],
});
