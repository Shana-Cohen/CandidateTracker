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
            candidate.RegistrationStatus = RegistrationStatus.Pending;
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }

        public Candidate GetCandidate(int id)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);

        }

        public List<Candidate> GetCandidatesbyStatus(RegistrationStatus status)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == status).ToList();

        }

        public void UpdateCandidate(Candidate c, RegistrationStatus s)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            c.RegistrationStatus = s;
            ctx.Candidates.Update(c);
            ctx.SaveChanges();
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

