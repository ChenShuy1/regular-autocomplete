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
        this.connection.onCompletionResolve(this.onCompletionResolved.bind(this));
    }
    private onCompletion(args): CompletionList {
        const {
            textDocument,
            position
        } = args;
        const mode = this.languageModes.getMode('regular');
        const doc = this.documentService.getDocument(textDocument.uri)!;
        return mode.doCompletion(doc, position);
    }
    private onCompletionResolved(item: CompletionItem): CompletionItem {
        if (item.data === 1) {
            item.detail = 'TypeScript details';
            item.documentation = 'TypeScript documentation';
        } else if (item.data === 2) {
            item.detail = 'JavaScript details';
            item.documentation = 'JavaScript documentation';
        }
        return item;
    }
}