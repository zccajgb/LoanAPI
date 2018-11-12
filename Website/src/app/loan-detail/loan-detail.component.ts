import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {LoanService} from '../loan.service';
import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../loan';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {

  @Input() loan: Loan;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLoan();
  }

  getLoan(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoan(id).subscribe(loan=>this.loan=loan);
  }

  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.loanService.updateLoan(this.loan).subscribe(()=>this.goBack());
  }
  delete(loan:Loan):void{
    this.loanService.deleteLoan(this.loan).subscribe(()=>this.goBack());
  }
}
