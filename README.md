# regular-autocomplete README

Regular自动补全插件，支持regular语法的自动补全。

## Snippets

- `rgc ->` regular component skeleton
- `list ->` regular list
- `if ->` regular if
- `ifelse ->` regular if else
- `ifelseif ->` regular if elseif
- `include ->` regular include statement
- `data ->` this.data
- `update ->` this.$update()
- `watch ->`this.$watch()

## Requirements

### 开启字符串补全
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

### 模板文件补全支持  
由于vscode内置语言中不支持`tpl`为后缀作为language，因此需要用户自定义关联`tpl`为`html`。  
需要在设置(`User Setting`)中：
```
"files.associations": {
    "*.tpl": "html"
}
```
配置`tpl`后缀文件到`html`的关联

**Enjoy!**
