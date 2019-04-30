using System;
using Microsoft.AspNetCore.Mvc;
using Ping_Backend.Services;

namespace Ping_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        // GET api/ping
        [HttpGet]
        public void Get()
        {
            DatabaseService.InitialState();
        }
    }
}