import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedMaterialModule} from './shared-material.module';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
