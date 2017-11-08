import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'allposts',
        loadChildren: 'app/lazy-components/listing/listing.module#ListingModule'
    },
    {
        path: 'post',
        loadChildren: 'app/lazy-components/form/form.module#FormModule'
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
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

