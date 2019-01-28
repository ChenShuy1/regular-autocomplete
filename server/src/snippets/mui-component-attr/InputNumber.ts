import {
    CompletionItemKind,
    InsertTextFormat
} from 'vscode-languageserver-types';

export default {
    /** Attr */ 
    placeholder: {
        label: 'placeholder',
        insertText: 'placeholder="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    modValue: {
        label: 'modValue',
        insertText: 'modValue={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    min: {
        label: 'min',
        insertText: 'min="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    max: {
        label: 'max',
        insertText: 'max="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    noFloat: {
        label: 'noFloat',
        insertText: 'noFloat={\${0:true|false}}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    precision: {
        label: 'precision',
        insertText: 'precision="${0:Number}"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    step: {
        label: 'step',
        insertText: 'step="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    /** Event */
    'on-Change': {
        label: 'on-Change',
        insertText: 'on-Change={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
}