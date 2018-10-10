/**
 * regular方法补全文件，每一个方法对应一个补全内容
 * 其中：
 * name: 方法名
 * snippet: 具体补全内容
 * description: 补全框内的提示描述
 * type: 提示类型
 * kind: 补全类型，1方法，9属性，13关键字
 * languageSport（可选）: 'all'，表示同时在多种类型文件触发补全
 */

const methods:any = {
    rglc: {
        name: "regularcomponent",
        snippet: [
            "const tpl = `\n`;",
            "\n",
            "const ${1:componentName} = Regular.extend({",
            "\tname: \'${1}\',",
            "\ttemplate: tpl,",
            "\tconfig(data) {}",
            "});",
            "\n",
            "export default ${1};"
        ],
        description: "regular component",
        type: "Snippet",
        kind: 1, // methods
    },
    list: {
        name: "list",
        snippet: [
            "{#list ${1:list} as ${2:item} by $2_index}",
            "\t$0",
            "{/list}"
        ],
        description: "regular For Loop",
        type: "Snippet",
        kind: 13, // keyword
        languageSport: 'all',
    },
    if: {
        name: "if",
        snippet:  [
            "{#if ${1:condition}}",
            "\t$0",
            "{/if}"
        ],
        description: "regular IF Statement",
        type: "Snippet",
        kind: 13,
        languageSport: 'all'
    },
    ifelse: {
        name: "ifelse",
        snippet:  [
            "{#if ${1:condition}}",
            "\t$2",
            "{#else}",
            "\t$0",
            "{/if}"
        ],
        description: "regular IF Statement",
        type: "Snippet",
        keyword: 13,
        languageSport: 'all'
    },
    ifelseif: {
        name: "ifelseif",
        snippet:  [
            "{#if ${1:condition1}}",
            "\t$2",
            "{#elseif ${3: condition2}}",
            "\t$0",
            "{/if}"
        ],
        description: "regular IF Statement",
        type: "Snippet",
        keyword: 13,
        languageSport: 'all'
    },
    include: {
        name: "include",
        snippet: ["{#include ${1:template}}"],
        description: "regular Include Statement",
        type: "Snippet",
        languageSport: 'all'
    },
    // 属性值补全
    data: {
        name: "data",
        snippet: ["this.data"],
        description: "this.data",
        type: "Snippet",
        kind: 9, // property
    },
    update: {
        name: 'update',
        snippet: ["this.\\$update();"],
        description: "this.$update",
        type: "Snippet",
        kind: 1,
    },
    watch: {
        name: "watch",
        snippet: [
            "this\.\\$watch(\'${1:property}\', function(newVal, oldVal) {",
            "\t",
            "});"
        ],
        description: "this.$watch",
        type: "Snippet",
        kind: 1,
    },
    emit: {
        name: "emit",
        snippet: [
            "this\.\\$emit(\'${1:eventName}\', { ${2:payload} });",
        ],
        description: "this.$emit",
        type: "Snippet",
        kind: 1,
    },
    refs: {
        name: "refs",
        snippet: [
            "this\.\\$refs"
        ],
        description: "this.$refs",
        type: "Snippet",
        kind: 1,
    }
};

export default methods;