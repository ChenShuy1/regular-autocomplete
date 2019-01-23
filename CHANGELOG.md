# Change Log

### 0.3.1 | 2019-01-23
- fix: template标签内包含template标签时语法无法高亮问题
- fix: rgl后缀文件无法提供this方法补全问题
- 新增html标签内回车增加缩进

### 0.3.0 | 2019-01-16
- 更加完善的regular语法补全
- 增加.rgl文件的template补全
- 增加.rgl文件的script补全
- 增加.rgl文件的style补全

### 0.2.1
- 增加rglc补全
- 增加$parent补全

### 0.2.0
- 将snippets提取出来用配置文件实现
- 支持.rgl模板文件，支持语法高亮和语法补全

### 0.1.2
- this补全带参数

### 0.1.1
- 将watch修改为箭头函数
- 完善readme

### 0.1.0  
- 增加对单个js文件的this补全
- 增加对模版文件的this补全支持  
⚠️ 当前对模版的this补全支持仅限于同名文件，比如`test.js`的模版文件对应`test.html/tpl`

### 0.0.4
- 添加对refs的补全支持
- 添加`emit`支持

### 0.0.3
- 添加`$refs`支持
- 支持html后缀文件唤起regular-autocomplete插件

### 0.0.2
- 修复regular语法错误
- 添加`watch`、`update`等支持
