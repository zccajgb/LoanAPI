import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../loan';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Loan[];

  constructor(private loanService: LoanService) { }

  
  ngOnInit() {
    this.getLoans();
    id : Number;
  }
  getLoans(): void {
    this.loanService.getLoans().subscribe(loans => this.loans =loans);
   }

}
