using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ping_Backend.Models;

namespace Ping_Backend.Services
{
    public static class DemoService
    {
        public async static Task<IEnumerable<Ping>> GetDemoData()
        {
            var result = new List<Ping>();
            var ping1 = new Ping
            {
                Title = "Destruction of property",
                Description = "12 cases of malicious damage to property were recorded. The protestors targeted fuel filling stations in particular areas.",
                Latitude = -18.879651,
                Longitude = 29.659772,
                Category = "Infrastructure",
            };
            var ping2 = new Ping
            {
                Title = "Help Save Children in Myanmar",
                Description = "Since August 2017, 700,000 Rohingya children and families have fled to Bangladesh following an alarming escalation of violence in northern Rakhine State, Myanmar. Now over 370,000 of Myanmar’s children are living in overcrowded refugee camps. Relying on food rations to survive, 40% of Rohingya child refugees suffer from stunting due to malnutrition. With little protection and at heightened risk of disease, abuse and exploitation, these children need your help to survive.",
                Latitude = 21.916222,
                Longitude = 95.955971,
                Category = "Child Starvation",

            };
            var ping3 = new Ping
            {
                Title = "Record number of both sick and immunized",
                Description = "Measles killed 72 children and adults in the European Region in 2018. According to monthly country reports for January to December 2018 (received as of 01 February 2019), 82 596 people in 47 of 53 countries contracted measles. In countries reporting hospitalization data, nearly 2/3 (61%) of measles cases were hospitalized. The total number of people infected with the virus in 2018 was the highest this decade: 3 times the total reported in 2017 and 15 times the record low number of people affected in 2016. The surge in measles cases in 2018 followed a year in which the European Region achieved its highest ever estimated coverage for the second dose of measles vaccination (90% in 2017). More children in the Region received the full two-dose series on time, according to their countries’ immunization schedules, in 2017 than in any year since WHO started collecting data on the second dose in 2000. Coverage with the first dose of the vaccine also increased slightly to 95%, the highest level since 2013. However, progress in the Region, based on achievements at the national level, can mask gaps at subnational levels, which are often not recognized until outbreaks occur.",
                Latitude = 39.302396,
                Longitude = -76.617730,
                Category = "Vaccination",
            };
            ping1.Tags = await NLPService.GetCategoriesFromTextAsync(ping1.Description);
            ping2.Tags = await NLPService.GetCategoriesFromTextAsync(ping2.Description);
            ping3.Tags = await NLPService.GetCategoriesFromTextAsync(ping3.Description);

            result.Add(ping1);
            result.Add(ping2);
            result.Add(ping3);
            return result;
        }
    }
}
