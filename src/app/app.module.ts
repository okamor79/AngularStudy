import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ResetpasswdComponent } from './resetpasswd/resetpasswd.component';
import { CreateuserComponent } from './createuser/createuser.component';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchPipe} from './shared/pipes/search.pipe';
import {RefDirective} from './ref.directive';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ResetpasswdComponent,
    CreateuserComponent,
    SearchPipe,
    RefDirective,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
