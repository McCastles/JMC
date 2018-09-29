# @linterhub/JMC

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background

## Install

## Usage

Use the following code example to convert JSON files to Markdown:
```javascript
let convert = require("@linterhub/JMC");
let result = convert("./examples/simple.json", "./markdowns");
```
The first parameter is obligatory and contains the URI of the input JSON file.
The second parameter is arbitrary and can contain the URI of the output Markdown file OR the directory to save the converted Markdown with the automaticly generated name.

To customize converted Markdown files, change the files in the `templates` directory accordingly.
For instance, to make the title of the output Markdown bold, `Title.txt` file in the `templates` directory should look like this:
```javascript
# __{{title}}__
```
Markdown syntax for the customization can be found [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
## Maintainers

## Contribute

## License

[MIT][repo-license]

[repo-license]: https://github.com/linterhub/JMC/blob/develop/LICENSE.md
