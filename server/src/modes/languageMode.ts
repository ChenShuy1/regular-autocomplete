import { Position, TextDocument, CompletionList, CompletionItem } from "vscode-languageserver";

export interface LanguageMode {
    getId(): string;
    configure?(options: any): void;
    doCompletion?(document: TextDocument, position: Position): CompletionList;
    doResolve?(document: TextDocument, item: CompletionItem): CompletionItem;
    onDocumentRemoved(document: TextDocument): void;
    dispose(): void;
}