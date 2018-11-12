import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { LoanSearchComponent } from './loan-search/loan-search.component';
import { AddLoanFormComponent } from './add-loan-form/add-loan-form.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoansComponent,
    LoanDetailComponent,
    MessagesComponent,
    LoanSearchComponent,
    AddLoanFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
