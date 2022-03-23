import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerDeleteComponent } from './speaker/speaker-delete/speaker-delete.component';
import { CustomDirective } from './Directives/custom.directive';
import { UpdateComponent } from './speaker/update/update.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { CustomerModule } from './customer/customer.module';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';

const routes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"list",component:CustomerListComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"add",component:CustomerAddComponent},
  {path:"**",component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDetailsComponent,
    SpeakerDeleteComponent,
    CustomDirective,
    UpdateComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    CustomerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},
    {provide:"baseUrl",useValue:"http://localhost:8080/",multi:true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
