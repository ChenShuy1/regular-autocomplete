import { LanguageMode } from "./languageMode";
import {
    CompletionItem,
    CompletionItemKind,
    CompletionList,
    InsertTextFormat
} from 'vscode-languageserver-types';
import MuiComponentAttr from '../snippets/mui-component-attr';
import { NULL_COMPLETION } from "../data";

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

            return NULL_COMPLETION;
        },
        onDocumentRemoved() {},
        dispose() {}
    }
}