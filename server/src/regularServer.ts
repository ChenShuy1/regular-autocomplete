import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
} from 'vscode-languageserver';

let connection = createConnection(ProposedFeatures.all);

const documents: TextDocuments = new TextDocuments();

connection.onInitialize((params: InitializeParams) => {
    return {
        capabilities: {
            completionProvider: {
                resolveProvider: true
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