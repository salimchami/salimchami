import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent {
  languages = ['fr', 'en'];
  currentLang: string;

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang || 'fr';
  }
}
