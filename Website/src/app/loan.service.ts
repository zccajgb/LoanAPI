import { Injectable } from '@angular/core';
import { Loan } from './loan';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Response } from '@angular/http';
import {map, catchError, tap} from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private loansUrl='https://localhost:5001/api/loan';
  
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('LoanService: ${message}');
  }
  
  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.loansUrl);
  }
  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addLoan(loan: Loan) {
    let body = JSON.stringify(loan);
 
    return this.http.post(this.loansUrl, body, httpOptions).pipe(
      catchError(this.handleError<Loan>('addLoan'))
    );
  }

  private extractData(res:Response){
    let body = res.json();
    return body.data || {};
  }

  getLoan(id: number): Observable<Loan>{
    const url = `${this.loansUrl}/${id}`;
    return this.http.get<Loan>(url).pipe(
      tap(_=> this.log('fetched Loan id=${id}')),
      catchError(this.handleError<Loan>('getLoan id=${id}'))
    );
  }

  updateLoan (loan: Loan): Observable<any> {
    console.log(loan);
    const url = this.loansUrl+'/'+loan.id;
    return this.http.put(url, loan, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${loan.id}`)),
      catchError(this.handleError<any>('updateLoan'))
    );
  }
  searchLoans(term: string): Observable<Loan[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Loan[]>(`${this.loansUrl}/?borrowerName=${term}`).pipe(
      tap(_ => this.log(`found loans matching "${term}"`)),
      catchError(this.handleError<Loan[]>('searchLoan', []))
    );  
  }

  deleteLoan(loan: Loan | number): Observable<Loan>{
    const id = typeof loan === 'number' ? loan : loan.id;
    const url = `${this.loansUrl}/${id}`;
 
    return this.http.delete<Loan>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Loan id=${id}`)),
      catchError(this.handleError<Loan>('deleteLoan'))
    );
  }
}
