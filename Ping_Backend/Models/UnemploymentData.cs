using System;
using System.Collections.Generic;

using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace Ping_Backend.Models
{
    public partial class UnemploymentData
    {
        [JsonProperty("State")]
        public string State { get; set; }

        [JsonProperty("Area_name")]
        public string AreaName { get; set; }

        [JsonProperty("Unemployment_Rate")]
        public string UnemploymentRate { get; set; }
    }


    public partial class UnemploymentData
    {
        public static List<UnemploymentData> FromJson(string json) => JsonConvert.DeserializeObject<List<UnemploymentData>>(json, Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this List<UnemploymentData> self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters =
            {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }
}
