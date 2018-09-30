import * as vscode from 'vscode';
import methods from './regularMethods';

export class CompletionJS implements vscode.CompletionItemProvider {
    private getFunction(content: String) {
        const regExp = /(\w+)\(.*\){/;
    }
    
    public provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
        let completionItems:vscode.CompletionItem[] = [];
        // console.log(document.getText());

        const triggerCharacter = context.triggerCharacter;
        // 触发条件为.时
        if (triggerCharacter === '.') {
            this.getFunction(document.getText());
            return completionItems;
        }
        
        // 循环读取regular中的所有方法(snippet)并添加到CompletionItem中
        Object.keys(methods).map((method_name) => {
            let completionItem = new vscode.CompletionItem(method_name, methods[method_name].kind);
            completionItem.kind = vscode.CompletionItemKind.Snippet;

            // 将数组改为字符串后作为insertText
            const snippet = methods[method_name].snippet.join('\n');

            completionItem.insertText = new vscode.SnippetString(snippet);
            completionItem.detail = methods[method_name].description;
            completionItems.push(completionItem);
        });

        return completionItems;
    }
}