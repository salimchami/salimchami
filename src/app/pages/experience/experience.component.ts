import {Component} from '@angular/core';
import {Experience} from "./experience.model";
import {TitleService} from "../../shared/title.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Array<Experience> = [
    new Experience('experiences.list.experience-9.title', 'experiences.list.experience-9.company', 'experiences.list.experience-9.companyLink', 'experiences.list.experience-9.companyLogo', 'experiences.list.experience-9.location', 'experiences.list.experience-9.startDate', 'experiences.list.experience-9.endDate'),
    new Experience('experiences.list.experience-8.title', 'experiences.list.experience-8.company', 'experiences.list.experience-8.companyLink', 'experiences.list.experience-8.companyLogo', 'experiences.list.experience-8.location', 'experiences.list.experience-8.startDate', 'experiences.list.experience-8.endDate'),
    new Experience('experiences.list.experience-7.title', 'experiences.list.experience-7.company', 'experiences.list.experience-7.companyLink', 'experiences.list.experience-7.companyLogo', 'experiences.list.experience-7.location', 'experiences.list.experience-7.startDate', 'experiences.list.experience-7.endDate'),
    new Experience('experiences.list.experience-6.title', 'experiences.list.experience-6.company', 'experiences.list.experience-6.companyLink', 'experiences.list.experience-6.companyLogo', 'experiences.list.experience-6.location', 'experiences.list.experience-6.startDate', 'experiences.list.experience-6.endDate'),
    new Experience('experiences.list.experience-5.title', 'experiences.list.experience-5.company', 'experiences.list.experience-5.companyLink', 'experiences.list.experience-5.companyLogo', 'experiences.list.experience-5.location', 'experiences.list.experience-5.startDate', 'experiences.list.experience-5.endDate'),
    new Experience('experiences.list.experience-4.title', 'experiences.list.experience-4.company', 'experiences.list.experience-4.companyLink', 'experiences.list.experience-4.companyLogo', 'experiences.list.experience-4.location', 'experiences.list.experience-4.startDate', 'experiences.list.experience-4.endDate'),
    new Experience('experiences.list.experience-3.title', 'experiences.list.experience-3.company', 'experiences.list.experience-3.companyLink', 'experiences.list.experience-3.companyLogo', 'experiences.list.experience-3.location', 'experiences.list.experience-3.startDate', 'experiences.list.experience-3.endDate'),
    new Experience('experiences.list.experience-2.title', 'experiences.list.experience-2.company', 'experiences.list.experience-2.companyLink', 'experiences.list.experience-2.companyLogo', 'experiences.list.experience-2.location', 'experiences.list.experience-2.startDate', 'experiences.list.experience-2.endDate'),
    new Experience('experiences.list.experience-1.title', 'experiences.list.experience-1.company', 'experiences.list.experience-1.companyLink', 'experiences.list.experience-1.companyLogo', 'experiences.list.experience-1.location', 'experiences.list.experience-1.startDate', 'experiences.list.experience-1.endDate'),
    new Experience('experiences.list.experience-0.title', 'experiences.list.experience-0.company', 'experiences.list.experience-0.companyLink', 'experiences.list.experience-0.companyLogo', 'experiences.list.experience-0.location', 'experiences.list.experience-0.startDate', 'experiences.list.experience-0.endDate'),
  ];

  constructor(private readonly titleService: TitleService,
              private readonly translateService: TranslateService) {
    titleService.append(translateService.instant('sidebar.experience'));
  }
}
