export class Loan {
    id: number;
    BorrowerName: string;
    FundingAmount: number;
    repaymentAmount: number;

    constructor(values: Object={}){
        Object.assign(this,values);
    }
}