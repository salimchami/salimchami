import {Component} from '@angular/core';
import {faGithub, faLinkedinIn, faStackOverflow, faGitlab, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";

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
}
