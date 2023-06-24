import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class ExperienceModule { }
