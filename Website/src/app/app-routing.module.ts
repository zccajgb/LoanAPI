import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoansComponent } from './loans/loans.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { AddLoanFormComponent } from './add-loan-form/add-loan-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/loans', pathMatch:'full'},
  { path: 'detail/:id', component: LoanDetailComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'add', component: AddLoanFormComponent }
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
