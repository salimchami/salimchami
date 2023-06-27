import {Component} from '@angular/core';
import {faGithub, faGitlab, faLinkedinIn, faStackOverflow, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {TitleService} from "../../shared/title.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faGithub = faGithub;
  faGitlab = faGitlab;
  faLinkedin = faLinkedinIn;
  faStackOverflow = faStackOverflow;
  faTwitter = faTwitter;

  constructor(private readonly titleService: TitleService,
              private readonly translateService: TranslateService) {
    titleService.append(translateService.instant('sidebar.about'));
  }
}
