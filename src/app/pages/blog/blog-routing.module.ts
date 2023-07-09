import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [{ path: '', component: BlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
  NgbModule],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
