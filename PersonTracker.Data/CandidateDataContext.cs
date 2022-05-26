using Microsoft.EntityFrameworkCore;

namespace PersonTracker.Data
{
    public class CandidateDataContext : DbContext
    {
        private readonly string _connectionString;

        public CandidateDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Candidate> Candidates { get; set; }
    }


}
