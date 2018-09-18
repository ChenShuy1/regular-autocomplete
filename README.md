# regular-autocomplete README

Regular自动补全插件，支持regular语法的自动补全。

## Snippets

- `rgc ->` regular component skeleton
- `list ->` regular list
- `if ->` regular if
- `include ->` regular include statement
- `data ->` this.data
- `update ->` this.$update()
- `watch ->`this.$watch()

## Requirements

由于regular的模板是基于字符串的，因此大部分的补全在字符串内执行。  
需要在设置(`User Setting`)中：
```
"editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
}
```
打开对`strings`补全的支持。

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
