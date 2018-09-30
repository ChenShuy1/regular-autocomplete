import * as vscode from 'vscode';
export class CompletionMethods implements vscode.CompletionItemProvider {

    public provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
        let completionItems:vscode.CompletionItem[] = [];
        console.log('test:', document);
        return completionItems;
    }
}