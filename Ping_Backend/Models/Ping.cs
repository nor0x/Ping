using System;
namespace Ping_Backend.Models
{
    public class Ping
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime TimeStamp { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string[] Media { get; set; }
        public string Category { get; set; }
        public string[] Tags { get; set; }
        public string Status { get; set; }
        public Ping()
        {
            Id = Guid.NewGuid().ToString();
            TimeStamp = DateTime.Now;
            Status = "open";
        }
    }
}
