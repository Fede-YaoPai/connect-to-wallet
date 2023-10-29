import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


const coreComponents = [
  HeaderComponent,
  FooterComponent
];


@NgModule({
  declarations: [
    ...coreComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...coreComponents
  ]
})
export class CoreModule { }
