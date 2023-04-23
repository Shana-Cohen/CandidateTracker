using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PersonTracker.Data;
using System.Collections.Generic;

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


        [HttpGet]
        [Route("getcandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new PersonRepo(_connectionString);
            return repo.GetCandidate(id);
        }


        [HttpGet]
        [Route("getcandidates")]
        public List<Candidate> GetCandidates(RegistrationStatus status)
        {
            var repo = new PersonRepo(_connectionString);
            return repo.GetCandidatesbyStatus(status);
        }


        [HttpGet]
        [Route("getcounts")]
        public Counts GetCounts()
        {
            var repo = new PersonRepo(_connectionString);
            return repo.GetCounts();
        }

        [HttpPost]
        [Route("acceptcandidate")]
        public void AcceptCandidate(Candidate candidate)
        {
            var repo = new PersonRepo(_connectionString);
            repo.UpdateCandidate(candidate, RegistrationStatus.Confirmed);
        }

        [HttpPost]
        [Route("rejectcandidate")]
        public void RejectCandidate(Candidate candidate)
        {
            var repo = new PersonRepo(_connectionString);
            repo.UpdateCandidate(candidate, RegistrationStatus.Refused);
        }

    }
}

   
