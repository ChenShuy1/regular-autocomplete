import { LanguageMode } from "../languageMode";
import {
    CompletionItem,
    CompletionItemKind,
    CompletionList,
    InsertTextFormat
} from 'vscode-languageserver-types';
import { NULL_COMPLETION } from "../../data";

export function getScriptMode(): LanguageMode {
    let config: any = {};
    return {
        getId(): string {
            return 'javascript';
        },
        configure(c) {
            config = c;
        },
        doCompletion(document, position): CompletionList {
            // 获取从头到光标的文本
            const offset = document.offsetAt(position);
            const text = document.getText().slice(0, offset);
            const trigger = text[text.length - 1];

            // get refs
            function getRefs(document: string):CompletionList {
                const completionItems:CompletionItem[] = [];
                // ref定义正则
                const regExp = /ref\s*=\s*\"*(\w+)\"*\s*/g;
                
                let result;
                while((result = regExp.exec(document)) !== null) {
                    const refName = result[1];

                    completionItems.push({
                        label: refName,
                        insertText: refName,
                        insertTextFormat: InsertTextFormat.PlainText,
                        kind: CompletionItemKind.Property,
                    });
                }
        
                return {
                    isIncomplete: false,
                    items: completionItems
                };
            }

            if (trigger === '.' && text.match(/this\.\$refs\.$/g)) {
                const completionList = getRefs(document.getText());
                if (completionList.items.length) {
                    return completionList;
                }
            }

            return NULL_COMPLETION;
        },
        onDocumentRemoved() {},
        dispose() {}
    }
}