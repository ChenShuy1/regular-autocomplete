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
- `watch ->`this.$emit()

## Method completion
- 支持js文件内使用`this.`进行方法的补全操作
![image](https://github.com/chenshy39/regular-autocomplete/blob/master/illustration/this-completion.gif)

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

### 更新日志
`v0.0.2`  
- 修复regular语法错误
- 添加`watch`、`update`等支持

`v0.0.3`  
- 添加`$refs`支持
- 支持html后缀文件唤起regular-autocomplete插件

`v0.0.5`  
- 添加对refs的补全支持
- 添加`emit`支持  

`v0.1.0`  
- 增加对单个js文件的this补全
- 增加对模版文件的this补全支持  
⚠️ 当前对模版的this补全支持仅限于同名文件，比如`test.js`的模版文件对应`test.html/tpl`  

**Enjoy!**
