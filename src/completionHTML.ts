import * as vscode from 'vscode';
import methods from './regularMethods';

export class CompletionHTML implements vscode.CompletionItemProvider {

    public provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
        let completionItems:vscode.CompletionItem[] = [];

        // 循环读取regular中的所有方法(snippet)并添加到CompletionItem中
        Object.keys(methods).map((method_name) => {
            if (methods[method_name].languageSport) {
                let completionItem = new vscode.CompletionItem(method_name);
                completionItem.kind = vscode.CompletionItemKind.Snippet;

                // 将数组改为字符串后作为insertText
                const snippet = methods[method_name].snippet.join('\n');

                completionItem.insertText = new vscode.SnippetString(snippet);
                completionItem.detail = methods[method_name].description;
                completionItems.push(completionItem);
            }
        });

        return completionItems;
    }
}