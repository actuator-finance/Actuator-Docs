const {spawnSync} = require('node:child_process');
const result = spawnSync(process.execPath, [
  require.resolve('@docusaurus/core/bin/docusaurus.mjs'), 'deploy', ...process.argv.slice(2),
], {
  stdio: 'inherit',
  env: {
    ...process.env,
    USE_SSH: 'true',
    GIT_USER_NAME: 'Actuator Finance',
    GIT_USER_EMAIL: 'actuatorfinance@proton.me',
    GIT_AUTHOR_NAME: 'Actuator Finance',
    GIT_AUTHOR_EMAIL: 'actuatorfinance@proton.me',
    GIT_COMMITTER_NAME: 'Actuator Finance',
    GIT_COMMITTER_EMAIL: 'actuatorfinance@proton.me',
  },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
