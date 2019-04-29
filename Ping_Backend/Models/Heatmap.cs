using System;
using System.Collections.Generic;

namespace Ping_Backend.Models
{
    public class Heatmap
    {
        public string Id { get; set; }
        public List<(double lat, double lng)> Bounds { get; set; }
        public string Color { get; set; }

        public Heatmap()
        {
            Id = Guid.NewGuid().ToString();
            Bounds = new List<(double lat, double lng)>();
        }
    }
}
