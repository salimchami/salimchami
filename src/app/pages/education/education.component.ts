import {Component} from '@angular/core';
import {Education} from "./education.model";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList: Education[] = [
    new Education('education.list.education-1.name', 'education.list.education-1.description', 'education.list.education-1.option', 'education.list.education-1.location', 'education.list.education-1.startYear', 'education.list.education-1.endYear', 'education.list.education-1.link'),
    new Education('education.list.education-2.name', 'education.list.education-2.description', 'education.list.education-2.option', 'education.list.education-2.location', 'education.list.education-2.startYear', 'education.list.education-2.endYear', 'education.list.education-2.link'),
    new Education('education.list.education-3.name', 'education.list.education-3.description', 'education.list.education-3.option', 'education.list.education-3.location', 'education.list.education-3.startYear', 'education.list.education-3.endYear', 'education.list.education-3.link'),
    new Education('education.list.education-4.name', 'education.list.education-4.description', 'education.list.education-4.option', 'education.list.education-4.location', 'education.list.education-4.startYear', 'education.list.education-4.endYear', 'education.list.education-4.link'),
  ];
}
