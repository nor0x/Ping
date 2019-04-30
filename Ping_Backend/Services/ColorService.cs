using System;
namespace Ping_Backend.Services
{
    public static class ColorService
    {
        public static string GetColorByRate(string rateString)
        {
            var rate = double.Parse(rateString.Replace(",", "."));
            if (rate <= 4)
            {
                return "#23d160";
            }
            else if(rate >= 4 && rate < 5)
            {
                return "#ffdd57";
            }
            else if(rate >= 5 && rate < 6)
            {
                return "#d8750d";
            }
            else if(rate >= 6)
            {
                return "#ff3860";
            }
            else
            {
                return "#ffffff";
            }
        }
    }
}
