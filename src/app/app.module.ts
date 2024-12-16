import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
