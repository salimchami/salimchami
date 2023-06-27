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
    new Experience('experience.list.education-1.title', 'experience.list.education-1.company', 'experience.list.education-1.companyLink', 'experience.list.education-1.companyLogo', 'experience.list.education-1.location', 'experience.list.education-1.startDate', 'experience.list.education-1.endDate'),
    new Experience('experience.list.education-2.title', 'experience.list.education-2.company', 'experience.list.education-2.companyLink', 'experience.list.education-2.companyLogo', 'experience.list.education-2.location', 'experience.list.education-2.startDate', 'experience.list.education-2.endDate'),
    new Experience('experience.list.education-3.title', 'experience.list.education-3.company', 'experience.list.education-3.companyLink', 'experience.list.education-3.companyLogo', 'experience.list.education-3.location', 'experience.list.education-3.startDate', 'experience.list.education-3.endDate'),
    new Experience('experience.list.education-4.title', 'experience.list.education-4.company', 'experience.list.education-4.companyLink', 'experience.list.education-4.companyLogo', 'experience.list.education-4.location', 'experience.list.education-4.startDate', 'experience.list.education-4.endDate'),
    new Experience('experience.list.education-5.title', 'experience.list.education-5.company', 'experience.list.education-5.companyLink', 'experience.list.education-5.companyLogo', 'experience.list.education-5.location', 'experience.list.education-5.startDate', 'experience.list.education-5.endDate'),
    new Experience('experience.list.education-6.title', 'experience.list.education-6.company', 'experience.list.education-6.companyLink', 'experience.list.education-6.companyLogo', 'experience.list.education-6.location', 'experience.list.education-6.startDate', 'experience.list.education-6.endDate'),
    new Experience('experience.list.education-7.title', 'experience.list.education-7.company', 'experience.list.education-7.companyLink', 'experience.list.education-7.companyLogo', 'experience.list.education-7.location', 'experience.list.education-7.startDate', 'experience.list.education-7.endDate'),
    new Experience('experience.list.education-8.title', 'experience.list.education-8.company', 'experience.list.education-8.companyLink', 'experience.list.education-8.companyLogo', 'experience.list.education-8.location', 'experience.list.education-8.startDate', 'experience.list.education-8.endDate'),
    new Experience('experience.list.education-9.title', 'experience.list.education-9.company', 'experience.list.education-9.companyLink', 'experience.list.education-9.companyLogo', 'experience.list.education-9.location', 'experience.list.education-9.startDate', 'experience.list.education-9.endDate'),
  ];

  constructor(private readonly titleService: TitleService,
              private readonly translateService: TranslateService) {
    titleService.append(translateService.instant('sidebar.experience'));
  }
}
