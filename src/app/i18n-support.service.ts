import { Injectable } from '@angular/core';
import { LANG_METADATA } from './lang-metadata';

@Injectable({
  providedIn: 'root'
})
export class I18nSupportService {
  private welcomeMsg;
  langCode = 'ko';

  constructor() {
    this.welcomeMsg = {
      'ko': '안녕하세요',
      'en': 'Hello',
      'jp': '初めまして',
      'fr': 'Bonjour'
    }
  }

  getWelcomeMsg(userName){
    const langData = LANG_METADATA.find(lang => lang.code === this.langCode);
    return langData.msg + userName;
  }
}
