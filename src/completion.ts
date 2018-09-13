import * as vscode from 'vscode';
import methods from './regularMethods';

export class Completion implements vscode.CompletionItemProvider {

    public provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
        let completionItems:vscode.CompletionItem[] = [];

        // 循环读取regular中的所有方法(snippet)并添加到CompletionItem中
        Object.keys(methods).map((method_name) => {
            let completionItem = new vscode.CompletionItem(method_name);
            completionItem.kind = vscode.CompletionItemKind.Snippet;
            completionItem.insertText = new vscode.SnippetString(methods[method_name].snippet);
            completionItem.detail = methods[method_name].description;
            completionItems.push(completionItem);
        });

        return completionItems;
    }
}