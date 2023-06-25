import {Skill} from "./skill.model";

export class Skills {
  constructor(
    public title: string,
    public list: Array<Skill>,
  ) {
  }
}
