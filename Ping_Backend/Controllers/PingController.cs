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
        // GET api/ping
        [HttpGet]
        public IEnumerable<Ping> Get()
        {
            return DatabaseService.GetAllPings();
        }

        // GET api/ping/5
        [HttpGet("{id}")]
        public Ping Get(string id)
        {
            return DatabaseService.GetPingById(id);
        }

        // POST api/ping
        [HttpPost]
        public Task<Ping> Post([FromBody] Ping value)
        {
            return DatabaseService.AddPing(value);
        }

        // PUT api/ping/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] Ping value)
        {
            DatabaseService.UpdatePing(value);
        }

        // DELETE api/ping/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            DatabaseService.DeletePing(id);

        }
    }
}
