import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class AboutModule { }
