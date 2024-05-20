import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSomponentComponent } from './shared-somponent/shared-somponent.component';
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    SharedSomponentComponent,
    HighlightDirective,
    ReversePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SharedSomponentComponent,
    HighlightDirective,
    ReversePipe
  ]
})
export class SharedModule { }
