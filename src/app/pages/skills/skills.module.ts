import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    SkillsComponent
  ],
    imports: [
        CommonModule,
        SkillsRoutingModule,
        TranslateModule.forChild(),
        NgOptimizedImage
    ]
})
export class SkillsModule { }
