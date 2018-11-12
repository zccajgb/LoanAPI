using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApi.Models
{
    public class Loan
    {
    public long Id { get; set; }
    public string BorrowerName { get; set; }
    public double FundingAmount { get; set; }
    public double repaymentAmount { get; set; }
    }
}
