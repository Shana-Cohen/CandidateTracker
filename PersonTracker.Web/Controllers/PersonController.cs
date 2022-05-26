using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PersonTracker.Data;

namespace PersonTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private string _connectionString;

        public PersonController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new PersonRepo(_connectionString);
            repo.AddCandidate(candidate);
        }

       
        [Route("pendinglist")]
        public void PendingList()
        {
            var repo = new PersonRepo(_connectionString);
            repo.GetPending();
        }

        [HttpGet]
        [Route("getcounts")]
        public Counts GetCounts()
        {
            var repo = new PersonRepo(_connectionString);
            return repo.GetCounts();
        }
    }
}

   
