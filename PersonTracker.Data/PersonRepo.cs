using System.Collections.Generic;
using System.Linq;

namespace PersonTracker.Data
{
    public class PersonRepo
    {

        private readonly string _connectionString;

        public PersonRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {

            using var ctx = new CandidateDataContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }

        public List<Candidate> GetPending()
        {

            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus==RegistrationStatus.Pending).ToList();
        }

        public Counts GetCounts()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return new Counts
            {
                Pending = ctx.Candidates.Count(c => c.RegistrationStatus == RegistrationStatus.Pending),
                Confirmed = ctx.Candidates.Count(c => c.RegistrationStatus == RegistrationStatus.Confirmed),
                Refused = ctx.Candidates.Count(c => c.RegistrationStatus == RegistrationStatus.Refused)
            }; 
        }
    }
}

