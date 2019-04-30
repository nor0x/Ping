using System;
namespace Ping_Backend.Services
{
    public static class ColorService
    {
        public static string GetColorByRate(string rateString)
        {
            var rate = double.Parse(rateString.Replace(",", "."));

            if (rate <= 2)
            {
                return "#23d160";
            }
            else if(rate >= 2 && rate <= 6)
            {
                return "#ffdd57";
            }
            else if(rate >= 6 && rate <= 10)
            {
                return "#d8750d";
            }
            else if(rate >= 10)
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
