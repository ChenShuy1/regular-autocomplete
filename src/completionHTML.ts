    import * as vscode from 'vscode';
import methods from './regularMethods';

export class CompletionHTML implements vscode.CompletionItemProvider {

    private getMethods(content: string) {
        const completionItems:vscode.CompletionItem[] = [];
        
        // 函数定义正则
        const funcExp = /(\S+)\(.*\)\s*{/g;
        
        let result;
        while((result = funcExp.exec(content)) !== null) {
            const funcName = result[1];
            // 生命周期函数过滤
            if (['config', 'init', 'destory'].indexOf(funcName) !== -1) {
                continue;
            }
            let completionItem = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
            completionItem.label = funcName;
            completionItems.push(completionItem);
        }


        return completionItems;
    }

    public provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
        let completionItems:vscode.CompletionItem[] = [];
        const triggerCharacter = context.triggerCharacter;
        // 触发条件为.时
        if (triggerCharacter === '.') {
            // 获取当前文件名称
            const editor = vscode.window.activeTextEditor;
            let activeFileName = editor ? editor.document.fileName : '';
            activeFileName = activeFileName.substring(0, activeFileName.lastIndexOf('.'));

            //  获取对应的js文件
            vscode.workspace.openTextDocument(`${activeFileName}.js`).then((files) => {
                const text = files.getText();
                completionItems = this.getMethods(text);
            });
            return completionItems;
        } else {
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
        }

        return completionItems;
    }
}