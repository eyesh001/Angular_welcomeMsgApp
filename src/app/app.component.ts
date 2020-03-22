import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nSupportService } from './i18n-support.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // todo: translate 修正
  private translate: TranslateService;

  constructor(translate: TranslateService, public i18nSupportService: I18nSupportService) {
    this.translate = translate;
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('jp');
  }
}
