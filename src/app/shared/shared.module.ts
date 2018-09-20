import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }

// TODO: Add pipes for translation, maybe table component, maybe pagination component
