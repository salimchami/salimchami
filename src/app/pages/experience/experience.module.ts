import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

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
        TranslateModule.forChild(),
        NgOptimizedImage
    ]
})
export class ExperienceModule { }
