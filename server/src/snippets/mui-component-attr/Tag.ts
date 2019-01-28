import {
    CompletionItemKind,
    InsertTextFormat
} from 'vscode-languageserver-types';

export default {
    model: {
        label: 'model',
        insertText: 'model={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    addable: {
        label: 'addable',
        insertText: 'addable={\$0:true|false}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    editable: {
        label: 'editable',
        insertText: 'model={\$0:true|false}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    /** event */
    'on-Add': {
        label: 'on-Add',
        insertText: 'on-Add={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
    'on-Delete': {
        label: 'on-Delete',
        insertText: 'on-Delete={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
    'on-Edit': {
        label: 'on-Edit',
        insertText: 'on-Edit={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
}