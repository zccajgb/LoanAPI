import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Loan } from './loan';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const loans = [
      { id : 2, BorrowerName: 'Joe', repaymentAmount: 2.22, FundingAmount: 2.50},
      { id : 3, BorrowerName: 'Jack', repaymentAmount: 1.11, FundingAmount: 1.50},
      { id : 4, BorrowerName: 'Josh', repaymentAmount: 3.33, FundingAmount: 3.50},
      { id : 5, BorrowerName: 'James', repaymentAmount: 4.44, FundingAmount: 4.50},
      { id : 6, BorrowerName: 'Jeremy', repaymentAmount: 5.55, FundingAmount: 5.50}  
    ];
    return {loans}
  }

  genId(loans: Loan[]): number {
    return loans.length >0 ? Math.max(...loans.map(loan => loan.id))+1:2;

  }
}
