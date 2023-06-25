import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {TranslateModule} from "@ngx-translate/core";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


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
        TranslateModule.forChild(),
        FontAwesomeModule,
        NgOptimizedImage
    ],
  providers: []
})
export class AboutModule {
}
