# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Run `npm run deploy` to build and publish to the `gh-pages` branch using SSH.
The deployment wrapper uses the Actuator Finance Git identity. The build plugin
removes the local checkout path from generated assets before content hashes are
finalized. Use this wrapper instead of calling `docusaurus deploy` directly.

For source commits, configure this checkout with:

```sh
git config user.name "Actuator Finance"
git config user.email "actuatorfinance@proton.me"
```

After a history cleanup, existing clones must be synchronized to the rewritten
branches before pushing. Do not merge or push old branches back into the repository.
