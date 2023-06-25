import {Component} from '@angular/core';
import {Skill} from "./skill.model";
import {Skills} from "./skills.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  languages: Skills = new Skills("skills.languages.title", [
    new Skill("skills.languages.list.skill-1.name", "skills.languages.list.skill-1.icon", "skills.languages.list.skill-1.link", "skills.languages.list.skill-1.level"),
    new Skill("skills.languages.list.skill-2.name", "skills.languages.list.skill-2.icon", "skills.languages.list.skill-2.link", "skills.languages.list.skill-2.level"),
    new Skill("skills.languages.list.skill-12.name", "skills.languages.list.skill-12.icon", "skills.languages.list.skill-12.link", "skills.languages.list.skill-12.level"),
    new Skill("skills.languages.list.skill-3.name", "skills.languages.list.skill-3.icon", "skills.languages.list.skill-3.link", "skills.languages.list.skill-3.level"),
    new Skill("skills.languages.list.skill-4.name", "skills.languages.list.skill-4.icon", "skills.languages.list.skill-4.link", "skills.languages.list.skill-4.level"),
    new Skill("skills.languages.list.skill-5.name", "skills.languages.list.skill-5.icon", "skills.languages.list.skill-5.link", "skills.languages.list.skill-5.level"),
    new Skill("skills.languages.list.skill-6.name", "skills.languages.list.skill-6.icon", "skills.languages.list.skill-6.link", "skills.languages.list.skill-6.level"),
    new Skill("skills.languages.list.skill-7.name", "skills.languages.list.skill-7.icon", "skills.languages.list.skill-7.link", "skills.languages.list.skill-7.level"),
    new Skill("skills.languages.list.skill-8.name", "skills.languages.list.skill-8.icon", "skills.languages.list.skill-8.link", "skills.languages.list.skill-8.level"),
    new Skill("skills.languages.list.skill-9.name", "skills.languages.list.skill-9.icon", "skills.languages.list.skill-9.link", "skills.languages.list.skill-9.level"),
    new Skill("skills.languages.list.skill-10.name", "skills.languages.list.skill-10.icon", "skills.languages.list.skill-10.link", "skills.languages.list.skill-10.level"),
    new Skill("skills.languages.list.skill-11.name", "skills.languages.list.skill-11.icon", "skills.languages.list.skill-11.link", "skills.languages.list.skill-11.level"),
  ]);
  methods: Skills = new Skills("skills.methods-practices.title", [
    new Skill("skills.methods-practices.list.skill-5.name", "skills.methods-practices.list.skill-5.icon", "skills.methods-practices.list.skill-5.link", "skills.methods-practices.list.skill-5.level"),
    new Skill("skills.methods-practices.list.skill-6.name", "skills.methods-practices.list.skill-6.icon", "skills.methods-practices.list.skill-6.link", "skills.methods-practices.list.skill-6.level"),
    new Skill("skills.methods-practices.list.skill-7.name", "skills.methods-practices.list.skill-7.icon", "skills.methods-practices.list.skill-7.link", "skills.methods-practices.list.skill-7.level"),
    new Skill("skills.methods-practices.list.skill-8.name", "skills.methods-practices.list.skill-8.icon", "skills.methods-practices.list.skill-8.link", "skills.methods-practices.list.skill-8.level"),
    new Skill("skills.methods-practices.list.skill-9.name", "skills.methods-practices.list.skill-9.icon", "skills.methods-practices.list.skill-9.link", "skills.methods-practices.list.skill-9.level"),
    new Skill("skills.methods-practices.list.skill-10.name", "skills.methods-practices.list.skill-10.icon", "skills.methods-practices.list.skill-10.link", "skills.methods-practices.list.skill-10.level"),
    new Skill("skills.methods-practices.list.skill-4.name", "skills.methods-practices.list.skill-4.icon", "skills.methods-practices.list.skill-4.link", "skills.methods-practices.list.skill-4.level"),
    new Skill("skills.methods-practices.list.skill-1.name", "skills.methods-practices.list.skill-1.icon", "skills.methods-practices.list.skill-1.link", "skills.methods-practices.list.skill-1.level"),
    new Skill("skills.methods-practices.list.skill-2.name", "skills.methods-practices.list.skill-2.icon", "skills.methods-practices.list.skill-2.link", "skills.methods-practices.list.skill-2.level"),
    new Skill("skills.methods-practices.list.skill-3.name", "skills.methods-practices.list.skill-3.icon", "skills.methods-practices.list.skill-3.link", "skills.methods-practices.list.skill-3.level"),
    new Skill("skills.methods-practices.list.skill-11.name", "skills.methods-practices.list.skill-11.icon", "skills.methods-practices.list.skill-11.link", "skills.methods-practices.list.skill-11.level"),
  ]);
  tools: Skills = new Skills("skills.tools.title", [
    new Skill("skills.tools.list.skill-1.name", "skills.tools.list.skill-1.icon", "skills.tools.list.skill-1.link", "skills.tools.list.skill-1.level"),
  ]);
  frameworks: Skills = new Skills("skills.frameworks.title", [
    new Skill("skills.frameworks.list.skill-1.name", "skills.frameworks.list.skill-1.icon", "skills.frameworks.list.skill-1.link", "skills.frameworks.list.skill-1.level"),
  ]);
  databases: Skills = new Skills("skills.databases.title", [
    new Skill("skills.databases.list.skill-1.name", "skills.databases.list.skill-1.icon", "skills.databases.list.skill-1.link", "skills.databases.list.skill-1.level"),
  ]);
  operatingSystems: Skills = new Skills("skills.operatingSystems.title", [
    new Skill("skills.operatingSystems.list.skill-1.name", "skills.operatingSystems.list.skill-1.icon", "skills.operatingSystems.list.skill-1.link", "skills.operatingSystems.list.skill-1.level"),
  ]);
  others: Skills = new Skills("skills.others.title", [
    new Skill("skills.others.list.skill-1.name", "skills.others.list.skill-1.icon", "skills.others.list.skill-1.link", "skills.others.list.skill-1.level"),
  ]);
  skills = [
    this.methods,
    this.languages,
    this.tools,
    this.frameworks,
    this.databases,
    this.operatingSystems,
    this.others];
}
