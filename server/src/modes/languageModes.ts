import { TextDocument, Position } from "vscode-languageserver";
import { LanguageMode } from './languageMode';
import { getRegularMode } from './regular';
import { getRegularHtmlMode } from './regular-html';

export interface LanguageModes {
  getModeAtPosition?(document: TextDocument, position: Position): LanguageMode | null;
  getAllModes?(): LanguageMode[];
  getAllModesInDocument?(document: TextDocument): LanguageMode[];
  getMode?(languageId: string): LanguageMode;
  onDocumentRemoved?(document: TextDocument): void;
  dispose?(): void;
}

export function getLanguageModes(): LanguageModes {
    let modes = {
        regular: getRegularMode(),
        'regular-html': getRegularHtmlMode(),
    };
    return {
        getMode(languageId: string): LanguageMode {
            return modes[languageId];
        },
    };
}