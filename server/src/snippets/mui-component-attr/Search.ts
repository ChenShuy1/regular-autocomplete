import {
    CompletionItemKind,
    InsertTextFormat
} from 'vscode-languageserver-types';

export default {
    modValue: {
        label: 'modValue',
        insertText: 'modValue={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    /** event */
    'on-Search': {
        label: 'on-Search',
        insertText: 'on-Search={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
}