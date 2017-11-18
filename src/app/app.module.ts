import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    AdminPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
