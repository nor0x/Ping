using System;
using System.Collections.Generic;
using System.Linq;
using GeoJSON.Net.Feature;
using GeoJSON.Net.Geometry;
using Newtonsoft.Json;
using Ping_Backend.Models;

namespace Ping_Backend.Services
{
    public static class HeatmapService
    {
        static List<UnemploymentData> _unemploymentData;
        static FeatureCollection _data;

        static HeatmapService()
        {
            var pov = System.IO.File.ReadAllText(@"./Data/UnemploymentRate.json");
            _unemploymentData = UnemploymentData.FromJson(pov);
            var states = System.IO.File.ReadAllText(@"./Data/states.json");
            _data = JsonConvert.DeserializeObject<GeoJSON.Net.Feature.FeatureCollection>(states);
        }

        public static Heatmap GetHeatmap(string name)
        {

            object value;
            IGeometryObject geometry = null;
            foreach (var f in _data.Features)
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
                if (geometry is MultiPolygon mp)
                {
                    var result = new List<(double lat, double lng)>();
                    var coordinates = mp.Coordinates.LastOrDefault().Coordinates.First().Coordinates;
                    foreach (var c in coordinates)
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

        public static List<Heatmap> GetAllHeatmaps()
        {
            var result = new List<Heatmap>();

            foreach(var ud in _unemploymentData)
            {
                if (!ud.AreaName.Contains(","))
                {
                    var h = GetHeatmap(ud.AreaName);
                    if (h != null)
                    {
                        result.Add(h);
                    }
                }
            }
            return result;
        }
    }
}
