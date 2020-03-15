import { Component, OnInit } from '@angular/core';
import {LANG_METADATA} from '../lang-metadata';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langMetadata = LANG_METADATA;
  langCode: string;

  constructor(public i18nSupporter: I18nSupportService) { 
    this.langCode = this.i18nSupporter.langCode; 
  }

  ngOnInit() {
  }

  setLnagCode(code){
    this.i18nSupporter.langCode = code;
  }
}
