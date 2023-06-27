import { Component } from '@angular/core';
import {TitleService} from "../../shared/title.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  constructor(private readonly titleService: TitleService,
              private readonly translateService: TranslateService) {
    titleService.append(translateService.instant('sidebar.blog'));
  }
}
