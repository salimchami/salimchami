import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import {TitleService} from "./shared/title.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly meta: Meta,
              private readonly titleService: TitleService,
              private readonly translate: TranslateService) {
    translate.get('about').subscribe({
      next: () => {
        const firstName = this.translate.instant('about.firstName');
        const lastName = this.translate.instant('about.lastName');
        const fullName = firstName + ' ' + lastName;
        this.meta.addTags([{
          name: 'author',
          content: fullName
        }, {
          name: 'description',
          content: fullName + ' - professional website'
        }, {
          name: 'keywords',
          content: firstName + ', ' + lastName + ', ' + fullName
        }]);
        this.titleService.insertDefaultTitle();
      }
    });
  }

}
