import Link from 'next/link';

export default function AllLocationsPage() {
  const cities = [
    "New-York", "Los-Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San-Antonio", "San-Diego", "Dallas", "San-Jose",
    "Austin", "Jacksonville", "Fort-Worth", "Columbus", "San-Francisco", "Charlotte", "Indianapolis", "Seattle", "Denver", "Washington",
    "Boston", "El-Paso", "Nashville", "Detroit", "Oklahoma-City", "Portland", "Las-Vegas", "Memphis", "Louisville", "Baltimore",
    "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Mesa", "Sacramento", "Atlanta", "Kansas-City", "Colorado-Springs", "Miami",
    "Raleigh", "Omaha", "Long-Beach", "Virginia-Beach", "Oakland", "Minneapolis", "Tulsa", "Arlington", "Tampa", "New-Orleans",
    "Wichita", "Cleveland", "Bakersfield", "Aurora", "Anaheim", "Honolulu", "Santa-Ana", "Riverside", "Corpus-Christi", "Lexington",
    "Stockton", "Henderson", "Saint-Paul", "St.-Louis", "Cincinnati", "Pittsburgh", "Greensboro", "Anchorage", "Plano", "Lincoln",
    "Orlando", "Irvine", "Newark", "Toledo", "Durham", "Chula-Vista", "Fort-Wayne", "Jersey-City", "St.-Petersburg", "Laredo",
    "Madison", "Chandler", "Buffalo", "Lubbock", "Scottsdale", "Reno", "Glendale", "Gilbert", "Winston-Salem", "North-Las-Vegas",
    "Norfolk", "Chesapeake", "Garland", "Irving", "Hialeah", "Fremont", "Boise", "Richmond", "Baton-Rouge", "Spokane",
    "Des-Moines", "Tacoma", "San-Bernardino", "Modesto", "Fontana", "Santa-Clarita", "Birmingham", "Oxnard", "Fayetteville", "Moreno-Valley",
    "Rochester", "Glendale-AZ", "Huntington-Beach", "Salt-Lake-City", "Grand-Rapids", "Amarillo", "Yonkers", "Aurora-IL", "Montgomery", "Akron",
    "Little-Rock", "Huntsville", "Augusta", "Port-St.-Lucie", "Grand-Prairie", "Columbus-GA", "Tallahassee", "Overland-Park", "Tempe", "McKinney",
    "Mobile", "Cape-Coral", "Shreveport", "Frisco", "Knoxville", "Worcester", "Brownsville", "Vancouver-WA", "Fort-Lauderdale", "Sioux-Falls",
    "Ontario", "Chattanooga", "Providence", "Newport-News", "Rancho-Cucamonga", "Santa-Rosa", "Oceanside", "Salem", "Elk-Grove", "Eugene",
    "Peoria", "Corona", "Springfield-MO", "Jackson", "Cary", "Fort-Collins", "Hayward", "Lancaster", "Alexandria", "Salinas",
    "Palmdale", "Lakewood", "Springfield-MA", "Pasadena", "Sunnyvale", "Macon", "Pomona", "Hollywood", "Kansas-City-KS", "Escondido",
    "Clarksville", "Joliet", "Rockford", "Torrance", "Naperville", "Paterson", "Savannah", "Syracuse", "Mesquite", "Dayton",
    "Orange", "Fullerton", "Pasadena-TX", "Hampton", "McAllen", "Killeen", "Warren", "West-Valley-City", "Columbia", "New-Haven",
    "Sterling-Heights", "Olathe", "Miramar", "Thousand-Oaks", "Waco", "Cedar-Rapids", "Bridgeport", "Visalia", "Stamford", "Concord",
    "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec-City", "Hamilton", "Kitchener",
    "London-ON", "Victoria", "Halifax", "Oshawa", "Windsor", "Saskatoon", "Niagara-Falls", "Regina", "St.-Johns", "Kelowna",
    "Barrie", "Sherbrooke", "Guelph", "Kanata", "Abbotsford", "Trois-Rivieres", "Kingston", "Milton", "Moncton", "White-Rock",
    "Nanaimo", "Brantford", "Chicoutimi", "Saint-Jerome", "Red-Deer", "Thunder-Bay", "Lethbridge", "Kamloops", "Sudbury", "Saint-Jean-sur-Richelieu",
    "Peterborough", "Chilliwack", "Chatham", "Belleville", "St.-Johns-NL", "Sarnia", "Airdrie", "Drummondville", "Welland", "Saint-Hyacinthe",
    "Sault-Ste.-Marie", "Fredericton", "Grande-Prairie", "Medicine-Hat", "Granby", "Bowmanville", "Beloeil", "Charlottetown", "Vernon", "North-Bay",
    "Saint-Thomas", "Cornwall", "Joliette", "Courtenay", "Victoriaville", "Woodstock", "St.-Thomas", "Chatham-Kent", "Georgetown", "Salaberry-de-Valleyfield",
    "Spruce-Grove", "Prince-George", "Sarnia", "Bradford", "Campbell-River", "Penticton", "Prince-Albert", "Stratford", "Orillia", "Moose-Jaw",
    "Lloydminster", "Walnut-Creek", "Concord-NC", "Athens", "Lafayette", "Hartford", "Topeka", "Fargo", "Simi-Valley", "Vallejo",
    "Carrollton", "Round-Rock", "Norman", "Abilene", "Peoria-AZ", "Berkeley", "Ann-Arbor", "Rochester-MN", "Allentown", "Waterbury",
    "Cambridge", "Arvada", "Independence", "Provo", "Lansing", "Fargo", "Odessa", "Richardson", "Fairfield", "El-Monte"
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">All Delivery Locations</h1>
      <p className="text-lg text-gray-600 mb-10">We proudly serve 300 major cities and their surrounding metropolitan areas across the USA and Canada.</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cities.map((city, index) => (
          <Link 
            key={index} 
            href={`/locations/${city.toLowerCase()}`}
            className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-semibold text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
          >
            {city.replace(/-/g, ' ')}
          </Link>
        ))}
      </div>
    </div>
  );
}
