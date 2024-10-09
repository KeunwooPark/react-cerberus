# react-cerberus

The goal of this framework is to provide a set of UI elements that guarantee consistent design and behavior across different platforms, such as web, iOS, and Android.

## How to publish

From the [documentation](https://nx.dev/recipes/nx-release/publish-in-ci-cd):

1. Run `nx release --skip-publish` locally. This will create a commit with the version and changelog updates, then create a tag for the new version.
2. Push the changes (including the new tag) to the remote repository with `git push && git push --tags`.
3. The CI workflow will automatically trigger and publish the packages to the npm registry.
