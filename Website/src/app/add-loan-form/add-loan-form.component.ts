import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../loan';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-loan-form',
  templateUrl: './add-loan-form.component.html',
  styleUrls: ['./add-loan-form.component.css']
})
export class AddLoanFormComponent implements OnInit {

  constructor(
    public loanService: LoanService,
    private location : Location,
    private route: ActivatedRoute
    ) { }
  loan:Loan;


  errorMessage: string;
  
  public addLoan(){
    if (!this.loan) {return;}
    /*this.loanService.addLoan(this.loan)
      .subscribe(
        loan=>this.loan,
        error=> this.errorMessage = <any>error.
        () => this.goBack());
    */    
    this.loanService.addLoan(this.loan)
    .subscribe(() => this.goBack());
    console.log(this.loan);

  }

  ngOnInit() {
    this.loan = new Loan({borrowerName:"",repaymentAmount:undefined,FundingAmount:undefined});
  }

  goBack(): void{
    this.location.back();
  }

}
