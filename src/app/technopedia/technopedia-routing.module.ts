import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnopediaComponent } from './technopedia.component';

const routes: Routes = [
  {
    path: '',
    component: TechnopediaComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'galler',
        loadChildren: () =>
          import('./contents/contents.module').then((m) => m.ContentsModule),
      },
      {
        path: 'about-u',
        loadChildren: () =>
          import('./credits/credits.module').then((m) => m.CreditsModule),
      },
      {
        path: 'contact-u',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnopediaRoutingModule {}
