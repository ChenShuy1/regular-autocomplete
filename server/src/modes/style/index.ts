import { LanguageMode } from '../../modes/languageMode';
import {
    getCSSLanguageService,
    getLESSLanguageService,
    LanguageService
  } from 'vscode-css-languageservice';

export function getCSSMode(): LanguageMode {
    const languageService = getCSSLanguageService();
    return getStyleMode('css', languageService);
}

export function getLESSMode(): LanguageMode {
    const languageService = getLESSLanguageService();
    return getStyleMode('less', languageService);
}

function getStyleMode(
    languageId: string,
    languageService: LanguageService,
): LanguageMode {
    let config: any = {};
    return {
        getId(): string{
            return languageId;
        },
        configure(c) {
            languageService.configure(c && c.css);
            config = c;
        },
        doCompletion(document, position) {
            return languageService.doComplete(document, position, languageService.parseStylesheet(document));
        }
    };
}