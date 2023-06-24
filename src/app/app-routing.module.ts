import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule)
  }, {
    path: 'education',
    loadChildren: () => import('./pages/education/education.module').then(m => m.EducationModule)
  }, {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
