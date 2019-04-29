using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ping_Backend.Models;
using Ping_Backend.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ping_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeatmapController : ControllerBase
    {

        // GET api/ping/newyork
        [HttpGet("{name}")]
        public List<(double lat, double lng)> Get(string name)
        {
            return HeatmapService.GetHeatmap(name);
        }

    }
}
