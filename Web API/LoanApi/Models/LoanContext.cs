using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace LoanApi.Models
{
    public class LoanContext : DbContext

    {
        public LoanContext(DbContextOptions<LoanContext> options) : base(options)
        {
        }
        public DbSet<Loan> LoanItems { get; set; }
    }
}
