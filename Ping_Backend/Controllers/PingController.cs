using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ping_Backend.Models;
using Ping_Backend.Services;

namespace Ping_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PingController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Ping> Get()
        {
            return DatabaseService.GetAllPings();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Ping Get(string id)
        {
            return DatabaseService.GetPingById(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Ping value)
        {
            DatabaseService.AddPing(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Ping value)
        {
            DatabaseService.UpdatePing(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            DatabaseService.DeletePing(id);

        }
    }
}
