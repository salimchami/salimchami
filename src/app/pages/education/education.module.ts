import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class EducationModule { }
