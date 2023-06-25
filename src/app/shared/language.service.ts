import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {CookieService} from "ngx-cookie-service";

@Injectable({providedIn: 'root'})
export class LanguageService {
  constructor(private translateService: TranslateService,
              private cookieService: CookieService) {
  }

  currentLang(): string {
    const cookieLang = this.cookieService.get('lang');
    if (cookieLang) {
      return cookieLang;
    } else {
      return this.translateService.currentLang || 'fr';
    }

  }
}
