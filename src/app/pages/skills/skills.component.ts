import {Component} from '@angular/core';
import {Skills} from "./skills.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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
}
