import {
    CompletionItemKind,
    InsertTextFormat
} from 'vscode-languageserver-types';

export default {
    /** Attr */ 
    autosize: {
        label: 'autosize',
        insertText: 'autosize="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    fullscreen: {
        label: 'fullscreen',
        insertText: 'fullscreen="\${0:true|false}"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    placeholder: {
        label: 'placeholder',
        insertText: 'placeholder="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    model: {
        label: 'model',
        insertText: 'model={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    /** Event */
    'on-Focus': {
        label: 'on-Focus',
        insertText: 'on-Focus={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
    'on-Blur': {
        label: 'on-Blur',
        insertText: 'on-Blur={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
    'on-Input': {
        label: 'on-Input',
        insertText: 'on-Input={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
}