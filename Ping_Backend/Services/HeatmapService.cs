using System;
using System.Linq;
using GeoJSON.Net.Geometry;
using Newtonsoft.Json;

namespace Ping_Backend.Services
{
    public static class HeatmapService
    {
        static HeatmapService()
        { 

        }

        public static void GetHeatmap()
        {
            var states = System.IO.File.ReadAllText(@"./Data/states.json");
            var data = JsonConvert.DeserializeObject<GeoJSON.Net.Feature.FeatureCollection>(states);
            var first = data.Features.First();
            var 
            var x = 1;
        }
    }
}
