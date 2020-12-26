import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponent } from './view-child/child/child.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [ //tous les composants de ce module
    AppComponent,
    BindingComponent,
    ViewChildComponent,
    ChildComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
