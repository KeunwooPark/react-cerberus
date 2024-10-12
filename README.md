# react-cerberus

The goal of this framework is to provide a set of UI elements that guarantee consistent design and behavior across different platforms, such as web, iOS, and Android.

## How to use

### Installation

```bash
# web platform
npm install @react-cerberus/elements @react-cerberus/web

# React Native platform
npm install @react-cerberus/elements @react-cerberus/native
```

### Usage

Run the initializer in your app's entry point.

Web platform:

```tsx
import { initReactCereberusWeb } from '@react-cerberus/web';

initReactCereberusWeb();
```

React Native platform:

```tsx
import { initReactCereberusNative } from '@react-cerberus/native';

initReactCereberusNative();
```

## Why do we need this?

A company or an organization with multiple products for mutiple platforms may want to have a unified design system across all of them.
However, vanilla HTML and React Native elements look different and behave differently, which makes it hard to achieve a consistent design and behavior.
For example, `button` elements in HTML and `TouchableOpacity` elements in React Native have different style.

(a screenshot of a button in HTML and a TouchableOpacity in React Native)

This framework provides a set of UI elements that look and behave the same across different platforms.

### Why can't we just use cross-platform UI libraries such as `react-native-for-web`?

It is possible. However, such libaries depends on a certain react framework, which restricts the flexibility of product development.
If an UI library is built on top of `react-native-for-web`, it is not possible to develop a service with web-based react framework such as `Next.js`.

## Development

## Install packages

```bash
npm install --legacy-peer-deps
```

We need to use `--legacy-peer-deps` because there are conflicts between `nx` libraries.

### How to publish

From the [documentation](https://nx.dev/recipes/nx-release/publish-in-ci-cd):

1. Run `nx release --skip-publish` locally. This will create a commit with the version and changelog updates, then create a tag for the new version.
2. Push the changes (including the new tag) to the remote repository with `git push && git push --tags`.
3. The CI workflow will automatically trigger and publish the packages to the npm registry.
