import { Component } from '@angular/core';
import {TitleService} from "../../shared/title.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent {

  constructor(private readonly titleService: TitleService,
              private readonly translateService: TranslateService) {
    titleService.append(translateService.instant('sidebar.talks'));
  }
}
