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

    convert('./examples/', false, './OutputDirectory/', undefined);
    /* all .json files from ./examples/ and subdirectories will be
    * converted and saved in ./OutputDirectory/examples/ */
```
* The first parameter is obligatory and contains the URI of the input JSON file or folder. It is possible to use mask to convert files only from given directory. For instance:
```javascript
    convert('./examples/*.json');
```

* The second paramenter is arbitrary. If true, the converter will try to convert meta-schema rather than object-describing one.

* The third parameter is arbitrary. If given, converted .md files will be saved according to the given path, copying the structure of original folder. The default output file name is markdowns.

* The fourth parameter is arbitrary. If given, custom template file will be taken into consideration. To customize converted Markdown files, custom template file should contain references to template .md files. For instance:
```json
    "Title": "./src/defaultTemplates/Title.md",
```
Markdown syntax for the customization can be found [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
## Maintainers

## Contribute

## License

[MIT][repo-license]

[repo-license]: https://github.com/linterhub/JMC/blob/develop/LICENSE.md
