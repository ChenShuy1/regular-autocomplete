import { TextDocument, Position } from "vscode-languageserver";
import { LanguageMode } from './languageMode';
import { getRegularMode } from './regular';
import { getRegularHtmlMode } from './regular-html';
import { getScriptMode } from './script';
import { getCSSMode, getLESSMode } from './style';
import { getDocumentRegions } from "./embeddedSupport";

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
        javascript: getScriptMode(),
        css: getCSSMode(),
        less: getLESSMode()
    };
    return {
        getMode(languageId: string): LanguageMode {
            return modes[languageId];
        },
        getModeAtPosition(document: TextDocument, position: Position): LanguageMode {
            const languageId = getDocumentRegions(document).getLanguageAtPosition(position);
            if (languageId) {
                return modes[languageId];
            }
            return null;
        }
    };
}