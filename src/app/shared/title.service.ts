import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TitleService {
  constructor(
    private readonly title: Title,
    private readonly translate: TranslateService) {
  }

  insertDefaultTitle(subTitle?: string) {
    const firstName = this.translate.instant('about.firstName');
    const lastName = this.translate.instant('about.lastName');
    const fullName = firstName + ' ' + lastName;
    this.title.setTitle(fullName + (subTitle ? ' - ' + subTitle : ''));
  }

  append(subTitle: string) {
    this.insertDefaultTitle(subTitle);
  }
}
