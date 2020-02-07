import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {routing,appRoutingProviders} from "./app-routing";
import { SimpleNotificationsModule} from "angular2-notifications";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorPageComponent,
    DetailComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
