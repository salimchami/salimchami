import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {faLanguage} from '@fortawesome/free-solid-svg-icons';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent {
  languages = ['fr', 'en'];
  currentLang: string;
  faLanguage = faLanguage;
  cookieLang = '';
  private cookieKey = 'lang';
  private defaultLanguage = 'fr';

  constructor(private translateService: TranslateService,
              private cookieService: CookieService) {
    this.cookieLang = this.cookieService.get(this.cookieKey);
    if (this.cookieLang) {
      this.currentLang = this.cookieLang;
      this.translateService.use(this.currentLang);
    } else {
      this.currentLang = this.translateService.currentLang || this.defaultLanguage;
      this.cookieService.set(this.cookieKey, this.currentLang);
    }
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLang = lang;
    this.cookieService.set(this.cookieKey, lang);
  }
}
