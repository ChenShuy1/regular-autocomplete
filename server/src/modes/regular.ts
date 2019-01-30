import { LanguageMode } from "./languageMode";
import {
    CompletionItem,
    CompletionItemKind,
    CompletionList,
    InsertTextFormat
} from 'vscode-languageserver-types';
import { NULL_COMPLETION } from "../data";
import { doComponentComplete } from "../snippets/componentComplete";

const REGULAR_TRIGGER = ['.'];

export function getRegularMode(): LanguageMode {
    let config: any = {};
    return {
        getId(): string {
            return 'regular';
        },
        configure(c) {
            config = c;
        },
        doCompletion(document, position): CompletionList {
            return NULL_COMPLETION;
        },
        onDocumentRemoved() {},
        dispose() {}
    }
}