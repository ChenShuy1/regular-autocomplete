import { Position, TextDocument, CompletionList, CompletionItem } from "vscode-languageserver";

export interface LanguageMode {
    getId(): string;
    configure?(options: any): void;
    doCompletion?(document: TextDocument, position: Position): CompletionList;
    doCompletionResolve?(item: CompletionItem): CompletionList;
    onDocumentRemoved?(document: TextDocument): void;
    dispose?(): void;
}