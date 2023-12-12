<div align="center">

[![license](https://img.shields.io/badge/License-LGPL%20v3-blue)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@inverternet/npm/latest.svg)](https://www.npmjs.com/package/@inverternet/npm)
[![npm downloads](https://img.shields.io/npm/dm/@inverternet/npm.svg)](https://www.npmjs.com/package/@inverternet/npm)
[![Follow on Twitter](https://img.shields.io/twitter/follow/inverternetwork.svg?label=follow+INVERTER)](https://twitter.com/inverternetwork)

</div>

## Inverter / NPM Template

Bun + Commit Safe + Latest as of 2023 Q3 => Npm Publish Template Repo

## Summary

This package contains all common npm practices for [INVERTER](https://github.com/InverterNetwork).
Learn more about INVERTER on (https://inverter.network).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the last releases.

## Install dependencies

Install dependencies with yarn:

```bash
bun add -D @inverternet/npm
```

or

```bash
npm install -D @inverternet/npm
```

## How to make a release

**Note For the Maintainer**: Add NPM_TOKEN to the GitHub Secrets.

1. PR with changes
2. Merge PR into main
3. Checkout main
4. `git pull`
5. `npm run release`
6. Make sure everything looks good (e.g. in CHANGELOG.md)
7. `npm run postRelease`
8. Done

## Summary

This package contains type definitions for INVERTER projects (https://github.com/InverterNetwork).