import { workspace } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

export default function initializeClient(rlsModulePath: string):LanguageClient {
	// server的debug参数
	// runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
    let debugOptions = {
        execArgv: ['--nolazy', '--inspect=6005']
	};
	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
    let serverOptions: ServerOptions = {
		run: { module: rlsModulePath, transport: TransportKind.ipc },
		debug: {
			module: rlsModulePath,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	const config = workspace.getConfiguration();
	
	// Options to control the language client
    let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: ['regular', 'javascript'],
		synchronize: {
			configurationSection: ['regular', 'html', 'javascript'],
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('{**/*.js,**/*.ts}', true, false, true)
		},
		initializationOptions: {
			config
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