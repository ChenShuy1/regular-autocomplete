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
    type: {
        label: 'type',
        insertText: 'type="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    placeholder: {
        label: 'placeholder',
        insertText: 'placeholder="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    size: {
        label: 'size',
        insertText: 'size="\${0:sm|lg}"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    addonBefore: {
        label: 'addonBefore',
        insertText: 'addonBefore="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    addonAfter: {
        label: 'addonAfter',
        insertText: 'addonAfter="\$0"',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    prefix: {
        label: 'prefix',
        insertText: 'prefix={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    suffix: {
        label: 'suffix',
        insertText: 'suffix={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Property,
    },
    /** event */
    'on-Change': {
        label: 'on-Change',
        insertText: 'on-Change={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
    'on-Enter': {
        label: 'on-Enter',
        insertText: 'on-Enter={\$0}',
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
    'on-CompositionStart': {
        label: 'on-CompositionStart',
        insertText: 'on-CompositionStart={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
    'on-CompositionEnd': {
        label: 'on-CompositionEnd',
        insertText: 'on-CompositionEnd={\$0}',
        insertTextFormat: InsertTextFormat.Snippet,
        kind: CompletionItemKind.Event,
    },
}