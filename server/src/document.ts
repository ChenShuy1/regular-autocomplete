import { TextDocuments, IConnection } from "vscode-languageserver";

export class DocumentService {
    private documents: TextDocuments;

    constructor() {
        this.documents = new TextDocuments();
    }

    getDocument(uri: string) {
        return this.documents.get(uri);
    }

    // Make the text document manager listen on the connection
    // for open, change and close text document events
    listen(connection: IConnection) {
        this.documents.listen(connection);
    }
}