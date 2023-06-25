import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {SkillsRoutingModule} from './skills-routing.module';
import {SkillsComponent} from './skills.component';
import {TranslateModule} from "@ngx-translate/core";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    TranslateModule.forChild(),
    NgOptimizedImage,
    NgbAccordionModule
  ]
})
export class SkillsModule {
}
