import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
} from 'vscode-languageserver';
import { RLS } from './services/rls';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

const documents: TextDocuments = new TextDocuments();

connection.onInitialize((params: InitializeParams) => {
    const rls = new RLS(params.rootPath, connection);
    return {
        capabilities: {
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: ['.']
            }
        }
    };
});

connection.onInitialized(() => {
	connection.console.log('connection initialized');
});

connection.onDidChangeConfiguration(change => {
	connection.console.log('change');
});

documents.listen(connection);
connection.listen();