using System;
using System.Collections;
using System.Collections.Generic;
using Ping_Backend.Models;

namespace Ping_Backend.Services
{
    public static class DemoService
    {
        public static IEnumerable<Ping> GetBaltimoreDemo()
        {
            var result = new List<Ping>();
            var ping1 = new Ping
            {
                Title = "bad thing happend",
                Description = "Est cupidatat in minim nisi veniam mollit. Est exercitation velit aliqua cupidatat ipsum ad culpa reprehenderit sint qui. Pariatur tempor commodo et amet nostrud.",
                Latitude = 39.290386,
                Longitude = -76.612190,
                Category = "Food",
            };
            var ping2 = new Ping
            {
                Title = "another bad thing",
                Description = "Est cupidatat in minim nisi veniam mollit. Est exercitation velit aliqua cupidatat ipsum ad culpa reprehenderit sint qui. Pariatur tempor commodo et amet nostrud.",
                Latitude = 39.293894,
                Longitude = -76.601429,
                Category = "Clean Water",

            };
            var ping3 = new Ping
            {
                Title = "even worse thing",
                Description = "Est cupidatat in minim nisi veniam mollit. Est exercitation velit aliqua cupidatat ipsum ad culpa reprehenderit sint qui. Pariatur tempor commodo et amet nostrud.",
                Latitude = 39.302396,
                Longitude = -76.617730,
                Category = "Electricity",

            };
            result.Add(ping1);
            result.Add(ping2);
            result.Add(ping3);
            return result;
        }
    }
}
