'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CompletionJS } from './completionJS';
import { CompletionHTML } from './completionHTML';
import { CompletionMethods } from './completionMethods';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "regular-autocomplete" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let completionJS = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'javascript'
    }, new CompletionJS(), '.');
    let completionHTML = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'html'
    }, new CompletionHTML());
    vscode.window.showInformationMessage('OK!');

    context.subscriptions.push(completionJS);
    context.subscriptions.push(completionHTML);
    // context.subscriptions.push(completionMethods);
}

// this method is called when your extension is deactivated
export function deactivate() {
}