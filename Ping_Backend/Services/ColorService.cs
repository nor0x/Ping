using System;
namespace Ping_Backend.Services
{
    public static class ColorService
    {
        public static string GetColorByRate(string rateString)
        {
            var rate = Convert.ToDouble(rateString);
            if(rate <= 2)
            {
                return "#cbf078";
            }
            else if(rate >= 2 && rate <= 6)
            {
                return "#f8f398";
            }
            else if(rate >= 6 && rate <= 10)
            {
                return "#f1b963";
            }
            else if(rate >= 10)
            {
                return "#e46161";
            }
            else
            {
                return "#ffffff";
            }
        }
    }
}
