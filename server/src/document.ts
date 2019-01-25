import { TextDocuments, IConnection } from "vscode-languageserver";

export class DocumentService {
    private documents: TextDocuments;

    constructor() {
        this.documents = new TextDocuments();
    }

    getDocument(uri: string) {
        return this.documents.get(uri);
    }

    listen(connection: IConnection) {
        this.documents.listen(connection);
    }
}