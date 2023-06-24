import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class BlogModule { }
