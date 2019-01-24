import * as vscode from 'vscode';

export class CompletionHTML implements vscode.CompletionItemProvider {

    private getMethods(content: string) {
        const completionItems:vscode.CompletionItem[] = [];
        
        // 函数定义正则
        const funcExp = /(\S+)\((.*)\)\s*{/g;
        
        let result;
        while((result = funcExp.exec(content)) !== null) {
            const funcName = result[1];
            let params = result[2].split(',');
            params = params.map((p) => p.trim());

            // 生命周期函数过滤
            if (['config', 'init', 'destory'].indexOf(funcName) !== -1) {
                continue;
            }
            let completionItem = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
            completionItem.label = funcName;
            let snippet = `${funcName}(`;
            params.forEach((p, index) => {
                // 处理包含$符的变量
                if (p.indexOf('$') !== -1) {
                    p = '\\' + p;
                }
                if (index === params.length - 1) {
                    snippet += `\${${index + 1}:${p}})`;
                } else {
                    snippet += `\${${index + 1}:${p}},`;
                }
            });
            
            completionItem.insertText = new vscode.SnippetString(snippet);
            completionItems.push(completionItem);
        }


        return completionItems;
    }

    public async provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {
        let completionItems:vscode.CompletionItem[] = [];
        const triggerCharacter = context.triggerCharacter;
        // 触发条件为.时
        if (triggerCharacter === '.') {
            // 获取当前文件名称
            const editor = vscode.window.activeTextEditor;
            let activeFileName = editor ? editor.document.fileName : '';
            activeFileName = activeFileName.substring(0, activeFileName.lastIndexOf('.'));

            //  获取对应的js文件
            await vscode.workspace.openTextDocument(`${activeFileName}.js`).then((files) => {
                const text = files.getText();
                completionItems = this.getMethods(text);
            });
            return completionItems;
        }

        return completionItems;
    }
}