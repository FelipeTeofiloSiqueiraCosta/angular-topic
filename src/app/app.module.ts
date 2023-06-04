import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { MainWrapperComponent } from './pages/logged-area/main-wrapper/main-wrapper.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { InitialComponent } from './pages/initial/initial.component';
import { TopicComponent } from './pages/logged-area/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfigurationComponent,
    MainWrapperComponent,
    SignInComponent,
    InitialComponent,
    TopicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
