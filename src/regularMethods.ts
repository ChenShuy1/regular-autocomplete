const methods:any = {
    rglc: {
        name: "regularcomponent",
        snippet: [
            "const tpl = `\n`;",
            "\n",
            "const ${1:componentName} = Regular.extend({",
            "\tname: \"${1}\",",
            "\ttemplate: tpl,",
            "\tconfig(data) {}",
            "});",
            "\n",
            "export default ${1};"
        ],
        description: "regular component",
        type: "Snippet"
    },
    list: {
        name: "list",
        snippet: [
            "{#list ${1:list} as ${2:item} by $2_index}",
            "\t$0",
            "{\\list}"
        ],
        description: "regular For Loop",
        type: "Snippet"
    },
    if: {
        name: "if",
        snippet:  [
            "{#if ${1:condition}}",
            "\t$2",
            "{#elseif ${3: condition}}",
            "\t$0",
            "{\\if}"
        ],
        description: "regular IF Statement",
        type: "Snippet"
    },
    include: {
        name: "include",
        snippet: ["{#include ${1:template}}"],
        description: "regular Include Statement",
        type: "Snippet"
    },
    // 属性值补全
    data: {
        name: "data",
        snippet: ["this.data"],
        description: "this.data",
        type: "Snippet"
    },
    update: {
        name: 'update',
        snippet: ["this.\\$update()"],
        description: "this.$update",
        type: "Snippet"
    },
    watch: {
        name: "watch",
        snippet: [
            "this\.\\$watch(\"${1:property}\", function() {",
            "\t",
            "});"
        ],
        description: "this.$watch",
        type: "Snippet"
    }
};

export default methods;