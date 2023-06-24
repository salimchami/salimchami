import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {faLanguage} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent {
  languages = ['fr', 'en'];
  currentLang: string;
  faLanguage = faLanguage;

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang || 'fr';
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLang = this.translateService.currentLang || 'fr';
  }
}
