using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoanApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LoanApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {

        private readonly LoanContext _context;

        public LoanController(LoanContext context)
        {
            _context = context;  
            /*
            if (_context.LoanItems.Count() == 0)
            {
                _context.LoanItems.Add(new Loan { BorrowerName = "Null" });
                _context.SaveChanges();
            }
            */
                
        }

    
        [HttpGet]
        public ActionResult<List<Loan>> GetAll()
        {
            return _context.LoanItems.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}",Name = "GetLoan")]
        public ActionResult<Loan> GetByID(long id)
        {
            var item = _context.LoanItems.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Create(Loan item)
        {
            _context.LoanItems.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetLoan", new { id = item.Id }, item);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public ActionResult<Loan> Update(long id, Loan item)
        {
            var loan = _context.LoanItems.Find(id);
            if (loan == null)
            {
                return NotFound();
            }

            loan.BorrowerName = item.BorrowerName;
            loan.repaymentAmount = item.repaymentAmount;
            loan.FundingAmount = item.FundingAmount;

            _context.LoanItems.Update(loan);
            _context.SaveChanges();
            return loan;
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var loan = _context.LoanItems.Find(id);
            if (loan==null)
            {   
                return NotFound();
            }

            _context.LoanItems.Remove(loan);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
