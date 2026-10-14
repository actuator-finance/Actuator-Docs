// Keep local checkout paths out of published JavaScript and source maps.
module.exports = function portableBuild(context) {
  return {
    name: 'portable-build',
    configureWebpack() {
      return {
        plugins: [{
          apply(compiler) {
            compiler.hooks.thisCompilation.tap('portable-build', compilation => {
              compilation.hooks.processAssets.tap({
                name: 'portable-build',
                stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE,
              }, assets => {
                const roots = [...new Set([
                  context.siteDir,
                  context.siteDir.replace(/\\/g, '/'),
                  JSON.stringify(context.siteDir).slice(1, -1),
                ])];
                for (const [name, asset] of Object.entries(assets)) {
                  if (!/\.(?:js|json|map|html|css|txt)$/.test(name)) continue;
                  const original = asset.source().toString();
                  let clean = original;
                  for (const root of roots) clean = clean.split(root).join('.');
                  if (clean !== original) {
                    compilation.updateAsset(name, new compiler.webpack.sources.RawSource(clean));
                  }
                }
              });
            });
          },
        }],
      };
    },
  };
};
