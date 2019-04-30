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
                Description = "In the last days 12 cases of malicious damage or destructtion of property were recorded. The protestors targeted fuel filling stations in particular areas.",
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
                Status = "in-progress"

            };
            var ping3 = new Ping
            {
                Title = "Record number of both sick and immunized",
                Description = "Measles killed 72 children and adults in the European Region in 2018. According to monthly country reports for January to December 2018 (received as of 01 February 2019), 82 596 people in 47 of 53 countries contracted measles. In countries reporting hospitalization data, nearly 2/3 (61%) of measles cases were hospitalized. The total number of people infected with the virus in 2018 was the highest this decade: 3 times the total reported in 2017 and 15 times the record low number of people affected in 2016. The surge in measles cases in 2018 followed a year in which the European Region achieved its highest ever estimated coverage for the second dose of measles vaccination (90% in 2017). More children in the Region received the full two-dose series on time, according to their countries’ immunization schedules, in 2017 than in any year since WHO started collecting data on the second dose in 2000. Coverage with the first dose of the vaccine also increased slightly to 95%, the highest level since 2013. However, progress in the Region, based on achievements at the national level, can mask gaps at subnational levels, which are often not recognized until outbreaks occur.",
                Latitude = 39.302396,
                Longitude = -76.617730,
                Category = "Vaccination",
                Status = "close"
            };

            var ping4 = new Ping
            {
                Title = "Floods in Indonesia",
                Description = "Heavy rains on 26-27 April caused widespread flooding and landslides in nine districts in Bengkulu Province, Sumatra. According to Government reports, 29 people have been killed and more than 12,000 people have been displaced. Local fisheries and infrastructure have been affected, including 184 houses and 44 public buildings that have been damaged. Flood waters have subsided, but many settlements remain flooded and figures are expected to increase. Search and rescue efforts continue. The authorities have established 12 displacement sites for flood-affected people. ",
                Latitude = -0.789275,
                Longitude = 113.921326,
                Category = "Disaster",
                Status = "open"
            };
            var ping5 = new Ping
            {
                Title = "The State of America’s Roads",
                Description = "Across the United States, millions of miles of decaying roads cause more than a shaky drive. They snarl traffic, cause delays, cost motorists millions of dollars, and increase the risks of driving. Roads pitted with potholes or lacking certain features such as shoulders and rumble strips can fuel collisions, putting drivers and passengers at increased risk of injury and even death. Road conditions vary from state to state. Illinois and Connecticut tie for the worst roads in the nation. In each state, a whopping 73 percent of the roads are in poor or mediocre condition. According to one official, some of the road problems in Connecticut can be chalked up to frequent traffic passing through the small state. In Illinois, it might be tempting to blame the crumbly roads on extreme weather conditions in the North – however, neighboring Indiana actually has the lowest percentage of roads in poor or mediocre condition. Other states with high rates of roads in disrepair include Wisconsin, Colorado, Oklahoma, and Rhode Island.",
                Latitude = 40.633125,
                Longitude = -89.398529,
                Category = "Infrastructure",
                Status = "in-progress"
            };            
            var ping6 = new Ping
            {
                Title = "the state of Europe’s dams",
                Description = "This year, The European Environment Agency has written a report, European water: assessment of status and pressures 2018, on the state of Europe’s water. This report compiles the information the EU Member States have published in their second river basin management plans for achieving the environmental objectives of the Water Framework Directive. This assessment reports that approximately 40% of European surface waters (rivers, lakes, and transitional and coastal waters) are in ‘good’ ecological status but 17% has been classified as ‘heavily modified.’ They identify that the most significant pressure on surface water is hydromorphological pressures—accounting for 40% of the pressure. These hydromorphological pressures include: straightening and channelisation, disconnection of flood plains, land reclamation, dams, weirs, and bank reinforcements.",
                Latitude = 48.871941,
                Longitude = 13.104050,
                Category = "Infrastructure",
                Status = "open"
            };
            ping1.Tags = await NLPService.GetCategoriesFromTextAsync(ping1.Description);
            ping2.Tags = await NLPService.GetCategoriesFromTextAsync(ping2.Description);
            ping3.Tags = await NLPService.GetCategoriesFromTextAsync(ping3.Description);
            ping4.Tags = await NLPService.GetCategoriesFromTextAsync(ping4.Description);
            ping5.Tags = await NLPService.GetCategoriesFromTextAsync(ping5.Description);
            ping6.Tags = await NLPService.GetCategoriesFromTextAsync(ping6.Description);

            result.Add(ping1);
            result.Add(ping2);
            result.Add(ping3);
            result.Add(ping4);
            result.Add(ping5);
            result.Add(ping6);

            return result;
        }
    }
}
