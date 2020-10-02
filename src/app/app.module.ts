import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
