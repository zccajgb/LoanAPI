import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Loan } from '../loan';
import { LoanService} from '../loan.service';


@Component({
  selector: 'app-loan-search',
  templateUrl: './loan-search.component.html',
  styleUrls: ['./loan-search.component.css']
})
export class LoanSearchComponent implements OnInit {
  loans$: Observable<Loan[]>;
  private searchTerms = new Subject<string>();

  constructor(private loanService:LoanService) { }

  search(term:string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() : void {
    this.loans$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.loanService.searchLoans(term)),
    
    );
  }

}
