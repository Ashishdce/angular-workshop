import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ListingComponent
    }])
  ],
  declarations: [ListingComponent]
})
export class ListingModule { }
