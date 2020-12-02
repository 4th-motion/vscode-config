# @4th-motion/vscode-config
> An easy way to share basic VSCode settings and extensions between your projects.

![Version][version-image]
![License][license-image]

With this config you can make sure that all developers in your team have the same basic settings for VSCode. Individual settings of each team member will not be overwritten.

<br>

## Installation

Add this package as a devDependency to your project:

```
yarn add --dev @4th-motion/vscode-config
```

<br>

## Usage

Once the package is installed, you can initiate it with:

```
yarn 4th-vscode
```

<br>

## Behind the scenes

The initialization process copies [vscode/settings.json](/vscode/settings.json) and [vscode/extenstions.json](/vscode/extenstions.json) from this repository to your project. If the files already exist, the contents are merged.

<br>

## Customize to your needs

You can rename this project to `@company/vscode-config` to tailor it to your cooporate. To change the name of the initialization process, you must modify the fields within `bin` in the _package.json_ file as follows:

```json
{
  "bin": {
    "company-vscode": "./index.js"
  }
}
```

<br>

## Further documents
- [Changelog](/docs/changelog.md)
- [Contributing](/docs/contributing.md)
- [Pull request](/docs/pull_request.md)
- [Code of conduct](/docs/code_of_conduct.md)

<br>

## Related projects

@4th-motion/git-hooks | @4th-motion/stylelint-config
:-------------------------|:-------------------------
[![@4th-motion/git-hooks][git-hooks-image]][git-hooks] | [![@4th-motion/stylelint-config][stylelint-image]][stylelint-config]

<br>

## License

Copyright © 2020 by 4th motion GmbH. Released under the [MIT License][license].

[version-image]: https://img.shields.io/github/package-json/v/4th-motion/vscode-config
[license-image]: https://img.shields.io/github/license/4th-motion/vscode-config
[git-hooks-image]: https://avatars1.githubusercontent.com/u/8463894?s=200&v=4
[stylelint-image]: https://avatars3.githubusercontent.com/u/10076935?s=200&v=4
[git-hooks]: https://github.com/4th-motion/git-hooks
[stylelint-config]: https://github.com/4th-motion/stylelint-config
[license]: /LICENSE.md
