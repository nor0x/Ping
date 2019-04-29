using System;
using System.Collections.Generic;
using System.Linq;
using GeoJSON.Net.Geometry;
using Newtonsoft.Json;
using Ping_Backend.Models;

namespace Ping_Backend.Services
{
    public static class HeatmapService
    {
        static List<UnemploymentData> _unemploymentData;

        static HeatmapService()
        {
            var pov = System.IO.File.ReadAllText(@"./Data/UnemploymentRate.json");
            _unemploymentData = UnemploymentData.FromJson(pov);
        }

        public static Heatmap GetHeatmap(string name)
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
                    var resultMap = new Heatmap();
                    resultMap.Bounds = result;
                    var dataset = _unemploymentData.FirstOrDefault(u => u.AreaName.ToLower() == name.ToLower());
                    if (dataset != null)
                    {
                        resultMap.Title = "Unemployment Rate in " + dataset.AreaName + " " + dataset.UnemploymentRate + "%";
                        resultMap.Color = ColorService.GetColorByRate(dataset.UnemploymentRate);
                        return resultMap;
                    }
                }
            }
            return null;
        }
    }
}
