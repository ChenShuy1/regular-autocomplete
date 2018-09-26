import * as vscode from 'vscode';

export class Reference implements vscode.ReferenceProvider {
    public provideReferences(document: vscode.TextDocument, position: vscode.Position, context: vscode.ReferenceContext, token: vscode.CancellationToken): vscode.Location[] {
        console.log('document');
        let references:vscode.Location[] = [];
        return references;
    }
}