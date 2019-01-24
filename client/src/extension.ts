'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { CompletionJS } from './completionJS';
import { CompletionHTML } from './completionHTML';
import registerLanguageConfigurations from './languages';
import initializeClient from './client';
import {
	LanguageClient,
} from 'vscode-languageclient';

let client:LanguageClient;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    registerLanguageConfigurations();
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let completionJS = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'javascript'
    }, new CompletionJS(), '.');
    let completionRgl = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'regular'
    }, new CompletionJS(), '.');
    let completionHTML = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'html'
    }, new CompletionHTML(), '.');

    context.subscriptions.push(completionJS);
    context.subscriptions.push(completionRgl);
    context.subscriptions.push(completionHTML);

    const serverModule = context.asAbsolutePath(path.join('server', 'out', 'regularServer.js'));
    
    client = initializeClient(serverModule);
    context.subscriptions.push(client.start());
    vscode.window.showInformationMessage('Regular Extension is Running');

}

// this method is called when your extension is deactivated
export function deactivate() {
    if (!client) {
        return;
    }
    return client.stop();
}