import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
//import { ModelsComponent } from './models/models.component';
import {UserServices} from './Services/User.services';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
