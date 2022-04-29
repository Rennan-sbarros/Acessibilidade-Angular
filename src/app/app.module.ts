import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyboardManagerDirective } from './shared/directives/keyboard-manager.directive';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalModule } from './shared/components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
