import { workspace } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

export default function initializeClient(rlsModulePath: string):LanguageClient {
    let debugOptions = {
        execArgv: ['--nolazy', '--inspect=6009']
    };
    let serverOptions: ServerOptions = {
		run: { module: rlsModulePath, transport: TransportKind.ipc },
		debug: {
			module: rlsModulePath,
			transport: TransportKind.ipc,
			options: debugOptions
		}
    };
    let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'plaintext' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	return new LanguageClient(
		'regularLanguageServer',
		'Regular Language Server',
		serverOptions,
		clientOptions
	);
}