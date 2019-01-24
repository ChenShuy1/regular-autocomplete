import * as vscode from 'vscode';

export class CompletionJS implements vscode.CompletionItemProvider {
    private getRefs(content: string) {
        const completionItems:vscode.CompletionItem[] = [];
        // ref定义正则
        const regExp = /ref\s*=\s*\"*(\w+)\"*\s*/g;
        
        let result;
        while((result = regExp.exec(content)) !== null) {
            const funcName = result[1];
            
            let completionItem = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
            completionItem.label = funcName;
            completionItems.push(completionItem);
        }

        return completionItems;
    }

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
    
    public provideCompletionItems(document:vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
        let completionItems:vscode.CompletionItem[] = [];
        const triggerCharacter = context.triggerCharacter;
        // 触发条件为.时
        if (triggerCharacter === '.') {
            const lineText = document.lineAt(position.line).text;
            const isRefs = lineText.match(/\$refs\./g);
            const isThis = lineText.match(/this\./g);
            
            if(isRefs) {
                return this.getRefs(document.getText());
            }
            if (isThis) {
                return this.getMethods(document.getText());
            }
        }

        return completionItems;
    }
}