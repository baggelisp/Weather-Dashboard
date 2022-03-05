import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainSectionComponent,
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopBarComponent,
    MainSectionComponent,
  ]
})
export class LayoutModule { }
