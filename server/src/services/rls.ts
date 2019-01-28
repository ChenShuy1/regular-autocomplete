import { 
    IConnection, 
    CompletionList,
    CompletionItem,
    TextDocuments,
} from "vscode-languageserver";
import { NULL_COMPLETION } from "../data";
import { LanguageModes, getLanguageModes } from "../modes/languageModes";
import { DocumentService } from '../document';

export class RLS {
    private languageModes: LanguageModes;
    private documentService: DocumentService;
    constructor(private workspacePath: string, private connection: IConnection) {
        this.languageModes = getLanguageModes();
        this.documentService = new DocumentService();
        this.documentService.listen(connection);
        this.setupLanguageFeatures();
    }
    private setupLanguageFeatures() {
        this.connection.onCompletion(this.onCompletion.bind(this));
        this.connection.onCompletionResolve(this.onCompletionResolve.bind(this));
    }
    private onCompletion(args): CompletionList {
        const {
            textDocument,
            position
        } = args;
        const mode = this.languageModes.getMode('regular-html');
        const doc = this.documentService.getDocument(textDocument.uri)!;
        return mode.doCompletion(doc, position);
    }
    private onCompletionResolve(item: CompletionItem): CompletionList {
        return NULL_COMPLETION;
    }
}