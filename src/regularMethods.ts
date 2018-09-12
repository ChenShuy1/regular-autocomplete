const methods:any = {
    list: {
        name: "list",
        snippet: "{#list ${1:list} as ${2:item} by ${3:item_index}}\n\t$0\n{\\list}",
        description: "regular For Loop",
        type: "Snippet"
    },
    if: {
        name: "if",
        snippet: "{#if ${1:condition}}\n\t$2\n{#elseif ${3: condition}}\n\t$0\n{\\if}",
        description: "regular IF Statement",
        type: "Snippet"
    },
    include: {
        name: "include",
        snippet: "{#include ${1:template}}",
        description: "regular Include Statement",
        type: "Snippet"
    }
}

export default methods;