import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FormComponent
    }])
  ],
  declarations: [FormComponent]
})
export class FormModule { }
