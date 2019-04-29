using System;
using System.Collections.Generic;
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

        public static List<(double lat, double lng)> GetHeatmap(string name)
        {
            var states = System.IO.File.ReadAllText(@"./Data/states.json");
            var data = JsonConvert.DeserializeObject<GeoJSON.Net.Feature.FeatureCollection>(states);
            var first = data.Features.First();
            object value;
            IGeometryObject geometry = null;
            foreach (var f in data.Features)
            {
                f.Properties.TryGetValue("NAME", out value);
                if (value != null)
                {
                    if (value.ToString().ToLower() == name.ToLower())
                    {
                        geometry = f.Geometry;
                        break;
                    }
                }
            }
            if (geometry != null)
            { 
                if(geometry is MultiPolygon mp)
                {
                    var result = new List<(double lat, double lng)>();
                    var coordinates = mp.Coordinates.LastOrDefault().Coordinates.First().Coordinates;
                    foreach(var c in coordinates)
                    {
                        result.Add((c.Latitude, c.Longitude)); 
                    }
                    return result;
                }
            }
            return null;
        }
    }
}
