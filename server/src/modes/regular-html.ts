import { LanguageMode } from "./languageMode";
import {
    CompletionItem,
    CompletionItemKind,
    CompletionList,
    InsertTextFormat
} from 'vscode-languageserver-types';
import MuiComponentAttr from '../snippets/mui-component-attr';
import { NULL_COMPLETION } from "../data";
import { doComponentComplete } from "../snippets/componentComplete";

export function getRegularHtmlMode(): LanguageMode {
    let config: any = {};
    return {
        getId(): string {
            return 'regular-html';
        },
        configure(c) {
            config = c;
        },
        doCompletion(document, position): CompletionList {
            // 获取从头到光标的文本
            const offset = document.offsetAt(position);
            const text = document.getText().slice(0, offset);
            const trigger = text[text.length - 1];

            // get methods
            function getMethods(document: string): CompletionList{
                const completionItems:CompletionItem[] = [];

                // 函数定义正则
                const funcExp = /(\w+)\(\s*([$\w]*)\s*,*\s*\)\s*{/g;
                
                let result;
                while((result = funcExp.exec(document)) !== null) {
                    const funcName = result[1];
                    let params = result[2].split(',');
                    params = params.map((p) => p.trim());
                    
                    // 生命周期函数过滤
                    if (['config', 'init', 'destory'].indexOf(funcName) !== -1) {
                        continue;
                    }

                    let snippet = `${funcName}(`;
                    params.forEach((p, index) => {
                        // 处理包含$符的变量
                        if (p.indexOf('$') !== -1) {
                            p = '\\' + p;
                        }
                        if (index === params.length - 1) {
                            snippet += `\${${index + 1}:${p}})`;
                        } else {
                            snippet += `\${${index + 1}:${p}},`;
                        }
                    });
                    completionItems.push({
                        label: funcName,
                        insertText: snippet,
                        insertTextFormat: InsertTextFormat.Snippet,
                        kind: CompletionItemKind.Function,
                    });
                }
                return {
                    isIncomplete: false,
                    items: completionItems
                };
            };

            if (trigger === '.' && /this\.$/g.test(text)) {
                const completionList = getMethods(document.getText());
                if (completionList.items.length) {
                    return completionList;
                }
            }

            const componentRegex = /<([A-Z][a-zA-Z0-9]*)\b[^<>]*$/;
            if (componentRegex.test(text)) {
                text.match(componentRegex);
                const componentName = RegExp.$1;
                const params = MuiComponentAttr[componentName];
                if (params) {
                    return {
                        isIncomplete: false,
                        items: Object.keys(params).map((attr) => {
                            return params[attr];
                        }),
                    };
                }
            }

            return doComponentComplete();
        },
        onDocumentRemoved() {},
        dispose() {}
    }
}