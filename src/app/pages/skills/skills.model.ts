import {Skill} from "./skill.model";

export class Skills {
  constructor(
    public title: string,
    public list: Array<Skill>,
  ) {
  }

  static languages() {
    return new Skills("skills.languages.title", [
      new Skill("skills.languages.list.skill-1.name", "skills.languages.list.skill-1.icon", "skills.languages.list.skill-1.link", "skills.languages.list.skill-1.level"),
      new Skill("skills.languages.list.skill-14.name", "skills.languages.list.skill-14.icon", "skills.languages.list.skill-14.link", "skills.languages.list.skill-14.level"),
      new Skill("skills.languages.list.skill-2.name", "skills.languages.list.skill-2.icon", "skills.languages.list.skill-2.link", "skills.languages.list.skill-2.level"),
      new Skill("skills.languages.list.skill-12.name", "skills.languages.list.skill-12.icon", "skills.languages.list.skill-12.link", "skills.languages.list.skill-12.level"),
      new Skill("skills.languages.list.skill-3.name", "skills.languages.list.skill-3.icon", "skills.languages.list.skill-3.link", "skills.languages.list.skill-3.level"),
      new Skill("skills.languages.list.skill-4.name", "skills.languages.list.skill-4.icon", "skills.languages.list.skill-4.link", "skills.languages.list.skill-4.level"),
      new Skill("skills.languages.list.skill-5.name", "skills.languages.list.skill-5.icon", "skills.languages.list.skill-5.link", "skills.languages.list.skill-5.level"),
      new Skill("skills.languages.list.skill-6.name", "skills.languages.list.skill-6.icon", "skills.languages.list.skill-6.link", "skills.languages.list.skill-6.level"),
      new Skill("skills.languages.list.skill-7.name", "skills.languages.list.skill-7.icon", "skills.languages.list.skill-7.link", "skills.languages.list.skill-7.level"),
      new Skill("skills.languages.list.skill-8.name", "skills.languages.list.skill-8.icon", "skills.languages.list.skill-8.link", "skills.languages.list.skill-8.level"),
      new Skill("skills.languages.list.skill-13.name", "skills.languages.list.skill-13.icon", "skills.languages.list.skill-13.link", "skills.languages.list.skill-13.level"),
      new Skill("skills.languages.list.skill-9.name", "skills.languages.list.skill-9.icon", "skills.languages.list.skill-9.link", "skills.languages.list.skill-9.level"),
      new Skill("skills.languages.list.skill-10.name", "skills.languages.list.skill-10.icon", "skills.languages.list.skill-10.link", "skills.languages.list.skill-10.level"),
      new Skill("skills.languages.list.skill-11.name", "skills.languages.list.skill-11.icon", "skills.languages.list.skill-11.link", "skills.languages.list.skill-11.level"),
    ]);
  }

  static methods() {
    return new Skills("skills.methods-practices.title", [
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
  }

  static tools() {
    return new Skills("skills.tools.title", [
      new Skill("skills.tools.list.skill-1.name", "skills.tools.list.skill-1.icon", "skills.tools.list.skill-1.link", "skills.tools.list.skill-1.level"),
      new Skill("skills.tools.list.skill-2.name", "skills.tools.list.skill-2.icon", "skills.tools.list.skill-2.link", "skills.tools.list.skill-2.level"),
      new Skill("skills.tools.list.skill-3.name", "skills.tools.list.skill-3.icon", "skills.tools.list.skill-3.link", "skills.tools.list.skill-3.level"),
      new Skill("skills.tools.list.skill-4.name", "skills.tools.list.skill-4.icon", "skills.tools.list.skill-4.link", "skills.tools.list.skill-4.level"),
      new Skill("skills.tools.list.skill-5.name", "skills.tools.list.skill-5.icon", "skills.tools.list.skill-5.link", "skills.tools.list.skill-5.level"),
      new Skill("skills.tools.list.skill-6.name", "skills.tools.list.skill-6.icon", "skills.tools.list.skill-6.link", "skills.tools.list.skill-6.level"),
      new Skill("skills.tools.list.skill-7.name", "skills.tools.list.skill-7.icon", "skills.tools.list.skill-7.link", "skills.tools.list.skill-7.level"),
      new Skill("skills.tools.list.skill-8.name", "skills.tools.list.skill-8.icon", "skills.tools.list.skill-8.link", "skills.tools.list.skill-8.level"),
      new Skill("skills.tools.list.skill-9.name", "skills.tools.list.skill-9.icon", "skills.tools.list.skill-9.link", "skills.tools.list.skill-9.level"),
      new Skill("skills.tools.list.skill-10.name", "skills.tools.list.skill-10.icon", "skills.tools.list.skill-10.link", "skills.tools.list.skill-10.level"),
      new Skill("skills.tools.list.skill-11.name", "skills.tools.list.skill-11.icon", "skills.tools.list.skill-11.link", "skills.tools.list.skill-11.level"),
      new Skill("skills.tools.list.skill-12.name", "skills.tools.list.skill-12.icon", "skills.tools.list.skill-12.link", "skills.tools.list.skill-12.level"),
      new Skill("skills.tools.list.skill-13.name", "skills.tools.list.skill-13.icon", "skills.tools.list.skill-13.link", "skills.tools.list.skill-13.level"),
    ]);
  }

  static frameworks() {
    return new Skills("skills.frameworks.title", [
      new Skill("skills.frameworks.list.skill-1.name", "skills.frameworks.list.skill-1.icon", "skills.frameworks.list.skill-1.link", "skills.frameworks.list.skill-1.level"),
      new Skill("skills.frameworks.list.skill-2.name", "skills.frameworks.list.skill-2.icon", "skills.frameworks.list.skill-2.link", "skills.frameworks.list.skill-2.level"),
      new Skill("skills.frameworks.list.skill-3.name", "skills.frameworks.list.skill-3.icon", "skills.frameworks.list.skill-3.link", "skills.frameworks.list.skill-3.level"),
    ]);
  }

  static databases() {
    return new Skills("skills.databases.title", [
      new Skill("skills.databases.list.skill-1.name", "skills.databases.list.skill-1.icon", "skills.databases.list.skill-1.link", "skills.databases.list.skill-1.level"),
      new Skill("skills.databases.list.skill-2.name", "skills.databases.list.skill-2.icon", "skills.databases.list.skill-2.link", "skills.databases.list.skill-2.level"),
      new Skill("skills.databases.list.skill-3.name", "skills.databases.list.skill-3.icon", "skills.databases.list.skill-3.link", "skills.databases.list.skill-3.level"),
      new Skill("skills.databases.list.skill-4.name", "skills.databases.list.skill-4.icon", "skills.databases.list.skill-4.link", "skills.databases.list.skill-4.level"),
    ]);
  }

  static operatingSystems() {
    return new Skills("skills.operatingSystems.title", [
      new Skill("skills.operatingSystems.list.skill-1.name", "skills.operatingSystems.list.skill-1.icon", "skills.operatingSystems.list.skill-1.link", "skills.operatingSystems.list.skill-1.level"),
      new Skill("skills.operatingSystems.list.skill-2.name", "skills.operatingSystems.list.skill-2.icon", "skills.operatingSystems.list.skill-2.link", "skills.operatingSystems.list.skill-2.level"),
    ]);
  }

  static architecture() {
    return new Skills("skills.architecture.title", [
      new Skill("skills.architecture.list.skill-1.name", "skills.architecture.list.skill-1.icon", "skills.architecture.list.skill-1.link", "skills.architecture.list.skill-1.level"),
      new Skill("skills.architecture.list.skill-2.name", "skills.architecture.list.skill-2.icon", "skills.architecture.list.skill-2.link", "skills.architecture.list.skill-2.level"),
      new Skill("skills.architecture.list.skill-3.name", "skills.architecture.list.skill-3.icon", "skills.architecture.list.skill-3.link", "skills.architecture.list.skill-3.level"),
      new Skill("skills.architecture.list.skill-4.name", "skills.architecture.list.skill-4.icon", "skills.architecture.list.skill-4.link", "skills.architecture.list.skill-4.level"),
      new Skill("skills.architecture.list.skill-5.name", "skills.architecture.list.skill-5.icon", "skills.architecture.list.skill-5.link", "skills.architecture.list.skill-5.level"),
      new Skill("skills.architecture.list.skill-6.name", "skills.architecture.list.skill-6.icon", "skills.architecture.list.skill-6.link", "skills.architecture.list.skill-6.level"),
      new Skill("skills.architecture.list.skill-7.name", "skills.architecture.list.skill-7.icon", "skills.architecture.list.skill-7.link", "skills.architecture.list.skill-7.level"),
      new Skill("skills.architecture.list.skill-8.name", "skills.architecture.list.skill-8.icon", "skills.architecture.list.skill-8.link", "skills.architecture.list.skill-8.level"),
    ]);
  }

  static tests() {
    return new Skills("skills.tests.title", [
      new Skill("skills.tests.list.skill-1.name", "skills.tests.list.skill-1.icon", "skills.tests.list.skill-1.link", "skills.tests.list.skill-1.level"),
      new Skill("skills.tests.list.skill-2.name", "skills.tests.list.skill-2.icon", "skills.tests.list.skill-2.link", "skills.tests.list.skill-2.level"),
      new Skill("skills.tests.list.skill-3.name", "skills.tests.list.skill-3.icon", "skills.tests.list.skill-3.link", "skills.tests.list.skill-3.level"),
      new Skill("skills.tests.list.skill-4.name", "skills.tests.list.skill-4.icon", "skills.tests.list.skill-4.link", "skills.tests.list.skill-4.level"),
      new Skill("skills.tests.list.skill-5.name", "skills.tests.list.skill-5.icon", "skills.tests.list.skill-5.link", "skills.tests.list.skill-5.level"),
      new Skill("skills.tests.list.skill-6.name", "skills.tests.list.skill-6.icon", "skills.tests.list.skill-6.link", "skills.tests.list.skill-6.level"),
      new Skill("skills.tests.list.skill-7.name", "skills.tests.list.skill-7.icon", "skills.tests.list.skill-7.link", "skills.tests.list.skill-7.level"),
      new Skill("skills.tests.list.skill-8.name", "skills.tests.list.skill-8.icon", "skills.tests.list.skill-8.link", "skills.tests.list.skill-8.level"),
      new Skill("skills.tests.list.skill-9.name", "skills.tests.list.skill-9.icon", "skills.tests.list.skill-9.link", "skills.tests.list.skill-9.level"),
    ]);
  }

  static servers() {
    return new Skills("skills.servers.title", [
      new Skill("skills.servers.list.skill-1.name", "skills.servers.list.skill-1.icon", "skills.servers.list.skill-1.link", "skills.servers.list.skill-1.level"),
      new Skill("skills.servers.list.skill-2.name", "skills.servers.list.skill-2.icon", "skills.servers.list.skill-2.link", "skills.servers.list.skill-2.level"),
      new Skill("skills.servers.list.skill-3.name", "skills.servers.list.skill-3.icon", "skills.servers.list.skill-3.link", "skills.servers.list.skill-3.level"),
      new Skill("skills.servers.list.skill-4.name", "skills.servers.list.skill-4.icon", "skills.servers.list.skill-4.link", "skills.servers.list.skill-4.level"),
      new Skill("skills.servers.list.skill-5.name", "skills.servers.list.skill-5.icon", "skills.servers.list.skill-5.link", "skills.servers.list.skill-5.level"),
    ]);
  }

  static versioning() {
    return new Skills("skills.versioning.title", [
      new Skill("skills.versioning.list.skill-1.name", "skills.versioning.list.skill-1.icon", "skills.versioning.list.skill-1.link", "skills.versioning.list.skill-1.level"),
      new Skill("skills.versioning.list.skill-2.name", "skills.versioning.list.skill-2.icon", "skills.versioning.list.skill-2.link", "skills.versioning.list.skill-2.level"),
      new Skill("skills.versioning.list.skill-3.name", "skills.versioning.list.skill-3.icon", "skills.versioning.list.skill-3.link", "skills.versioning.list.skill-3.level"),
      new Skill("skills.versioning.list.skill-4.name", "skills.versioning.list.skill-4.icon", "skills.versioning.list.skill-4.link", "skills.versioning.list.skill-4.level"),
    ]);
  }
}
