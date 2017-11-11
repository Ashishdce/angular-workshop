import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '/',
    loadChildren: './lazy-components/listing/listing.module#ListingModule'
  },
  {
    path: 'post',
    loadChildren: './lazy-components/form/form.module#FormModule'
  },
  {
    path: '',
    redirectTo: 'allposts',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'allposts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
