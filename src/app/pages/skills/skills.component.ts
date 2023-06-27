import {Component} from '@angular/core';
import {Skills} from "./skills.model";
import {CookieService} from "ngx-cookie-service";
import {TitleService} from "../../shared/title.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  currentSkills: number;
  architecture: Skills = Skills.architecture();
  versioning: Skills = Skills.versioning();
  servers: Skills = Skills.servers();
  tests: Skills = Skills.tests();
  languages: Skills = Skills.languages();
  methods: Skills = Skills.methods();
  tools: Skills = Skills.tools();
  frameworks: Skills = Skills.frameworks();
  databases: Skills = Skills.databases();
  operatingSystems: Skills = Skills.operatingSystems()
  skills = [
    this.methods,
    this.architecture,
    this.languages,
    this.frameworks,
    this.tests,
    this.servers,
    this.databases,
    this.versioning,
    this.tools,
    this.operatingSystems];

  constructor(
    private readonly cookieService: CookieService,
    private readonly titleService: TitleService,
    private readonly translateService: TranslateService) {
    const lastVisitedSkills = +this.cookieService.get('last-skills-visited');
    titleService.append(translateService.instant('sidebar.skills'));
    if (lastVisitedSkills) {
      this.currentSkills = lastVisitedSkills;
    } else {
      this.currentSkills = 0;
    }
  }

  accordionToggle(index: number) {
    this.cookieService.set('skills-visited', '' + index);
    this.currentSkills = index;
  }
}
