import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule } from './components/components.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendService } from './services/backend.service'
import { NavigatorService } from './services/navigator.service';
import { FooterComponent } from './components/footer/footer.component'
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule, ComponentsModule, IonicModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BackendService,
    NavigatorService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
