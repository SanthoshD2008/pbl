const photo = (id, width=1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const cities = {
  Lyon: {
    tag: 'The city of gastronomy',
    desc: 'Lyon is a major city in east-central France, located where the Rhône and Saône rivers meet. It is famous for its historic districts, Roman heritage, silk-making history, festivals and traditional cuisine. Lyon is often called the gastronomic capital of France.',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9BBn8vWRIqzGlCPjbRLzfr0hYrxy1GDHJGsKEHbs6D9_oVL91BPrXYs&s=10",
    monuments: [
      ['Basilica of Notre-Dame de Fourvière', 'A landmark basilica on Fourvière Hill, known for its impressive architecture and panoramic views over Lyon.','./Images/Lyon/Basilica_Notre_Dame.jpg'],
      ['Saint-Jean Cathedral (Cathédrale Saint-Jean-Baptiste)', 'A historic cathedral in Old Lyon, famous for its Gothic architecture and astronomical clock.','./Images/Lyon/Cathedrale_Saint_jean_Baptiste.jpg'],
      ['Ancient Roman Theatres of Fourvière', 'Well-preserved Roman theatres that show Lyon ancient past as the Roman city of Lugdunum.','./Images/Lyon/Roman_theatre.jpg']
    ],
    culture: [
      ['Fête des Lumières (Festival of Lights)', 'A famous annual festival in which buildings, streets and public spaces are illuminated with artistic light displays.','./Images/Lyon/Festival_Of_Lights.jpg'],
      ['Lyon museums and festivals', 'Visit the Lumière Museum or attend cultural events such as the Nuits de Fourvière festival and the Biennale.','./Images/Lyon/Museum_Lyon1.jpg'],
      ['Exploring the traboules of Old Lyon', 'Discover historic hidden passageways and courtyards that connect streets in the Renaissance district.','./Images/Lyon/Lyons_Traboules.jpg'],
    ],
    restaurants: [
      ['Brasserie Georges', 'A historic Lyon restaurant founded in 1836, known for its grand dining hall and traditional French and Lyonnaise dishes.','./Images/Lyon/brasserie_georges.jpg'],
      ['Le Café des Fédérations', 'A traditional bouchon lyonnais serving regional dishes in a classic, lively bistro atmosphere.','./Images/Lyon/Cafe_des_federation.jpg'],
      ['Restaurant Le Musée','A traditional bouchon in central Lyon known for generous portions and classic local cooking.','./Images/Lyon/Restaurant_le_musee.jpg'],
    ],
    hotels: [
      ['InterContinental Lyon – Hotel Dieu', 'A luxury hotel inside the historic Grand Hôtel-Dieu complex, close to the Rhône riverfront and central attractions.','./Images/Lyon/Intercontinentak_Lyon_Hotel_Dieu.jpg'],
      ['Cour des Loges Lyon', 'A luxury hotel in a historic Renaissance building in the heart of Vieux Lyon, the Old Town.','./Images/Lyon/Cour_des_loges.jpg'],
      ['Fourvière Hôtel','A hotel on Fourvière Hill, set in a former convent and close to the basilica and Roman theatres.','./Images/Lyon/Fourviere_hotel.jpg'],
    ],
    food: [
      ['Quenelles de brochet', 'Soft fish dumplings, often made with pike, traditionally served with a creamy Nantua sauce.','./Images/Lyon/Quenel;es_de_brochet.jpg'],
      ['Saucisson brioché', 'A Lyon speciality consisting of sausage baked inside a soft brioche bread.','./Images/Lyon/Saucisson.jpg'],
      ['Tarte aux pralines roses', 'A sweet tart filled with a bright pink praline mixture made from almonds and caramelised sugar.','./Images/Lyon/Tarte_aux_pralines_Roses.jpg']
    ]
  },
  Nice: {
    tag: 'The French Riviera',
    desc: 'Nice is a city on the French Riviera in southeastern France, beside the Mediterranean Sea. It is known for its sunny climate, colourful Old Town, seaside promenade, art, festivals and traditional Niçoise cuisine.',
    img: photo('photo-1533105079780-92b9be482077', 1800),
    monuments: [
      ['Sainte-Réparate Cathedral','A historic Baroque cathedral in Place Rossetti,in the heart of the Old Town.','./Images/Nice/Cathedral_Sainte_Reparate1.jpg'],
      ['Palais Lascaris', 'A 17th-century Baroque palace in Old Nice,known for its decorated rooms and collection of musical instruments.','./Images/Nice/Palasis_Lascaris1.jpg'],
      ['Saint Nicholas Russian Orthodox Cathedral','A striking cathedral known for its colourful domes and Russian architectural style.', './Images/Nice/Russian_Orthodox_Cathedral_Nice_France.jpg']
    ],
    culture: [
      ['Nice Jazz Festival', 'A major music festival featuring French and international performers playing jazz and other styles.','./Images/Nice/nice-jazz-festival-1.jpg '],
      ['Visiting art museums', 'Explore paintings and sculptures at museums such as the matisse Museum and Marc Chagall National Museum.','./Images/Nice/musee-matisse-nice.jpg'],
      ['Nice Carnival(Carnaval de Nice)', 'A famous annual celebration with colourfulparades,decorated floats,costumes,music and flower battles.','./Images/Nice/queen-of-the-carnival.jpg'],
    ],
    restaurants: [
      ['Chez Pipo', 'A well-known local spot especially famous for socca, the chickpea-flour pancake.','./Images/Nice/Pipo.jpg'],
      ['Chez Acchiardo','A family-run restaurant serving traditional Niçoise and Mediterranean dishes.','./Images/Nice/Acchiardo.jpg'],
      ['La Merenda','A small traditional restaurant known for local recipes and classic Niçoise cooking.','./Images/Nice/La_merenda.jpg'],
    ],
    hotels: [
       ['Hôtel Negresco', 'A landmark luxury hotel on the Promenade des Anglais, recognised for its historic architecture and art-filled interiors.','./Images/Nice/hotel-le-negresco.jpg'],
      ['Le Méridien Nice', 'An upscale hotel near the beach, known for its rooftop pool and sea views.','./Images/Nice/Le_Meridien.jpg'],
      ['Hôtel West End', 'A historic seafront hotel with views of the Mediterranean and easy access to the Promenade des Anglais.','./Images/Nice/West_End_Hotel.jpg']
     
    ],
    food: [
      ['Socca', 'A thin, savoury pancake made with chickpea flour, water and olive oil, usually served warm.','./Images/Nice/Socca.jpg'],
      ['Salade Niçoise', 'A traditional salad commonly made with tomatoes, hard-boiled eggs, olives, tuna or anchovies and vegetables.','./Images/Nice/Salad_Nicoise.jpg'],
      ['Pissaladière', 'A savoury onion tart with olives, alongside a classic vegetable dish from the region.','./Images/Nice/Pissaladiere.jpg'],
    ]
  },
  Strasbourg: {
    tag: 'Alsatian charm',
    desc: 'A storybook city of Gothic architecture, canals, timber-framed houses and Alsatian traditions.',
    img:"https://blogs-images.forbes.com/geoffreymorrison/files/2018/10/Exploring-Petite-France-Strasbourg-by-Geoffrey-Morrison-3-of-10.jpg",
    monuments: [
      ['Strasbourg Cathedral (Cathédrale Notre-Dame)',' A masterpiece of Gothic architecture built from pink Vosges sandstone, famous for its soaring single spire and intricate astronomical clock.','./Images/Strasbourg/Strasbourg_Cathedral.jpg'],
      ['Maison Kammerzell','A richly carved 15th-century merchant house standing next to the cathedral, celebrated for its ornate wooden facade and leaded-glass windows.','./Images/Strasbourg/Maison_Kammerzell.jpg'],
      ['Ponts Couverts & Barrage Vauban','Historic fortified bridges and stone towers spanning the Ill River, paired with a 17th-century defensive dam offering panoramic city views.','./Images/Strasbourg/Ponts_Couverts_Barrage_Vauban.jpg']
    ],
    culture: 
    [
      ['Christkindelsmärik (Strasbourg Christmas Market)','One of Europe’s oldest and most famous Christmas markets, filling the historic centre with wooden chalets, festive lights and seasonal treats.','./Images/Strasbourg/Christkindelsmärik.jpg'],
      ['Canal boat tours in La Petite','France Cruise along the Ill River past medieval bridges, covered locks and picturesque 16th- and 17thcentury half-timbered buildings.','./Images/Strasbourg/france-boat-trip-strasbourg.jpg'],
      ['Visiting the Alsatian Museum & European Quarter',' Discover traditional regional crafts at the Musée Alsacien or tour the European Parliament in Strasbourg’s modern diplomatic district.','./Images/Strasbourg/Alsatian_Museum_European_Quarter.jpg']
    ],
    restaurants: [
      ['Maison Kammerzell', 'A historic dining room inside the famous medieval building on Cathedral Square, serving traditional Alsatian dishes.','./Images/Strasbourg/Maison_Kammerzell1.jpg'],
      ['Winstub Le Clou', 'A traditional winstub (Alsatian wine tavern) in central Strasbourg known for its cosy wood-panelled interior and classic regional cooking.','./Images/Strasbourg/Winstub_Le_Clou.jpg'],
      ['Au Pont Corbeau','A well-known winstub near the Ill River serving generous portions of authentic Alsatian specialities in a traditional setting.','./Images/Strasbourg/AuPontCorbeau.jpg']
    ],
    hotels: [
      ['Hôtel Régent Petite France', 'A luxury hotel converted from a former 17th-century ice factory, set right beside the canals and halftimbered houses of La Petite France.','./Images/Strasbourg/Hôtel_Régent_Petite_France.jpg'],
      ['Hôtel Cour du Corbeau', 'A charming boutique hotel housed in a restored 16th-century courtyard inn just across the river from the historic island.','./Images/Strasbourg/Hôtel_Cour_du_Corbeau.jpg'],
      ['Maison Rouge Strasbourg Hotel','A historic hotel near Place Kléber with Art Deco heritage and easy walking access to the cathedral and shopping streets.','./Images/Strasbourg/Maison_Rouge_Strasbourg_Hotel.jpg']
    ],
    food: [
      ['Choucroute Garnie', 'A hearty Alsatian dish of fermented cabbage cooked with white wine and spices, served with various sausages, cured meats and potatoes.','./Images/Strasbourg/Choucroute_Garnie.jpg'],
      ['Flammekueche', 'A thin, crispy flatbread topped with crème fraîche, thinly sliced onions and smoky lardons, baked quickly in a hot oven.','./Images/Strasbourg/Flammekueche.jpg'],
      ['Kougelhopf', 'A tall, ring-shaped brioche cake baked in a fluted mould with raisins and almonds, dusted with powdered sugar.','./Images/Strasbourg/Kougelhopf.jpg']
    ]
  },
  Bordeaux: {
    tag: 'Elegance and heritage',
    desc: 'A graceful riverside city of grand architecture, historic streets, museums and regional specialities.',
    img:"https://i.insider.com/5810b944dd08954e098b4888?width=1200&format=jpeg",
    monuments: [
      ['Place de la Bourse and Miroir d’eau', 'An iconic 18th-century royal square facing the world’s largest reflecting pool, which creates mirror images of the classical buildings.','./Images/Bordeaux/Miroir_Deau_of_bordeaux.jpg'],
      ['Bordeaux Cathedral(Cathédrale Saint-André)', 'A grand Gothic cathedral known for its intricate stone portals, tall nave and separate bell tower, the Tour Pey-Berland.', './Images/Bordeaux/Cathedrale_Saint_Andre.jpg'],
      ['Grosse Cloche', 'A medieval belfry and former city gate with twin towers and a large historic bell, standing in the heart of Old Bordeaux.','./Images/Bordeaux/Gross_Cloche.jpg'],
    ],
    culture: [
      ['Bordeaux Fête le Vin (Bordeaux Wine Festival)', 'A famous festival held along the Garonne riverfront featuring wine tastings, regional food stalls, concerts and tall sailing ships.','./Images/Bordeaux/Miroir_Deau_of_bordeaux.jpg'],
      ['Visiting La Cité du Vin and Bassins des Lumières', 'Explore interactive exhibits on global wine culture at La Cité du Vin or see immersive digital art projections inside a former submarine base.','./Images/Bordeaux/La_Cité_du_vin.jpg'],
      ['Strolling along the Garonne Quays', 'Walk, cycle or relax along the landscaped riverside promenades connecting historic stone squares with modern public parks.','./Images/Bordeaux/garronne_Quays.jpg'],
    ],
    restaurants: [
      ['La Tupina', 'A renowned traditional restaurant in the Saint-Michel district celebrated for open-hearth cooking and southwestern regional specialities.','./Images/Bordeaux/La_Tupina.jpg'],
      ['Le Petit Commerce', 'A lively seafood bistro in the historic centre known for fresh Atlantic fish, oysters and classic French brasserie dishes.','./Images/Bordeaux/La_Petit_Commerce.jpg'],
      ['Brasserie Bordelaise','A bustling traditional brasserie near Place du Parlement serving regional meats, local cheeses and classic Bordeaux recipes.','./Images/Bordeaux/brasserie-bordelaise.jpg'],
    ],
    hotels: [
      ['InterContinental Bordeaux – Le Grand Hôtel', 'A landmark luxury hotel facing the Grand Théâtre on Place de la Comédie, recognised for its neoclassical facade and historic interiors.','./Images/Bordeaux/InterContintenalBoredeaux.jpg'],
      ['Hôtel de Sèze', 'An elegant central hotel located near the Allées de Tourny and the Esplanade des Quinconces.','./Images/Bordeaux/Hotel_Seze.jpg'],
      ['Yndo Hôtel','A boutique hotel housed in a 19th-century private mansion in central Bordeaux, blending historic architecture with contemporary design.','./Images/Bordeaux/Ymdo_Hotel.jpg'],
    ],
    food: [
      ['Cannelé de Bordeaux','A small, fluted pastry flavoured with vanilla and rum, featuring a dark caramelised crust and a soft, custardy centre.','./Images/Bordeaux/Canele.jpg'],
      ['Huîtres du Bassin d’Arcachon','Fresh oysters harvested from the nearby Arcachon Bay on the Atlantic coast, commonly served chilled with lemon or shallot vinegar.','./Images/Bordeaux/Arcahon.jpg'],
      ['Entrecôte à la Bordelaise','A grilled ribeye steak traditionally served with a rich sauce made from red Bordeaux wine, shallots, bone marrow and herbs.','./Images/Bordeaux/Entrecote_a_la_Bordelaise.jpg']
    ]
  },
  Marseille: {
    tag: 'The Mediterranean port',
    desc: 'A lively Mediterranean port city known for its harbour, coastal views and diverse cultural heritage.',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9-7eGaZIC_nKZqn63dSu84VwGIgksS5huYGvIafHIIQzDDwshH_Vtqk&s=10",
    monuments: [
      ['Basilica of Notre-Dame de la Garde', 'A hilltop Romano-Byzantine basilica topped with a golden statue, offering panoramic views over Marseille and the Mediterranean Sea.','./Images/Marseille/Notre_Dame.jpg'],
      ['Vieux-Port (Old Port) & Fort Saint-Jean','The historic natural harbour of Marseille, guarded at its entrance by the 17th-century stone fortifications of Fort Saint-Jean.','./Images/Marseille/Vieux_Port.jpg'],
      ['Palais Longchamp','A monumental 19th-century palace with grand colonnades and fountains built to celebrate the arrival of water from the Durance River.','./Images/Marseille/Palais_Longchamp.jpg'],
    ],
    culture: [
      ['Exploring Le Panier & Mucem','Wander the colourful, narrow streets of Marseille’s oldest quarter and visit the Mucem, a modern museum dedicated to Mediterranean civilisations.','./Images/Marseille/Exploring_Le_Panier_Mucem.jpg'],
      ['Boat trips to the Calanques National Park','Take a boat excursion or hike along dramatic white limestone cliffs and turquoise coves stretching between Marseille and Cassis.','./Images/Marseille/Boat_trips _to_the_Calanques_National_Park'],
      ['Festival de Marseille','An annual summer arts festival bringing together international dance, music, theatre and cinema performances across the city.','./Images/Marseille/Festival_de_Marseille.jpg'],
    ],
    restaurants: [
      ['Chez Fonfon','A classic family-run seafood restaurant in the picturesque Vallon des Auffes fishing cove, famous for traditional bouillabaisse.','./Images/Marseille/Chez_Fonfon1.jpg'],
      ['Le Miramar', 'A well-known restaurant overlooking the Vieux-Port, recognised for authentic Marseille fish soups and Mediterranean seafood.','./Images/Marseille/Le_Miramar.jpg'],
      ['Chez Étienne',' A historic neighbourhood pizzeria and trattoria in Le Panier known for wood-fired pizzas and traditional local dishes.','./Images/Marseille/Chez_Étienne.jpg'],
    ],
    hotels: [
      ['InterContinental Marseille – Hotel Dieu',' A luxury hotel set in a monumental 18th-century historic building overlooking the Vieux-Port and Notre-Dame de la Garde.','./Images/Marseille/InterContinental_Marseille _ Hotel_Dieu.jpg'],
      ['Sofitel Marseille Vieux-Port',' An upscale harbourfront hotel offering sweeping views across the Old Port entrance and the Mediterranean coastline.','./Images/Marseille/Sofitel_Marseille_Vieux_Port.jpg'],
      ['Les Bords de Mer','A seaside boutique hotel perched directly above the water near Catalans Beach with views of the Frioul Islands.','./Images/Marseille/Les_Bords_de_Mer.jpg']
    ],
    food: [
      ['Bouillabaisse', 'A traditional Provençal fish stew made with several varieties of Mediterranean rockfish, saffron, herbs and served with rouille sauce and croutons.','./Images/Marseille/Bouillabaisse.jpg'],
      ['Navettes de Marseille','A traditional Provençal fish stew made with several varieties of Mediterranean rockfish, saffron, herbs and served with rouille sauce and croutons.','./Images/Marseille/Navettes_de_Marseille.jpg'],
      ['Panisse', 'Golden, crispy fried rounds or sticks made from chickpea flour, served hot as a popular street snack or side dish.','./Images/Marseille/Panisse.jpg'],
    ]
  }
};
const cityNames = ['Lyon', 'Nice', 'Strasbourg', 'Bordeaux', 'Marseille'];
const photoFallbacks = {
  monument: photo('photo-1511818966892-d7d671e672a2'),
  culture: photo('photo-1500530855697-b586d89ba3ee'),
  food: photo('photo-1540189549336-e6e99c3679fe'),
  restaurant: photo('photo-1517248135467-4c7edcad34c4'),
  hotel: photo('photo-1566073771259-6a8506099945')
};
function slug(name) { return name.toLowerCase().replaceAll(' ', '-'); }
function makeCityCard(name) {
  const c = cities[name];
  return `<article class="city-card"><img src="${c.img}" alt="View of ${name}, France"><div class="city-card-body"><h3>${name}</h3><p>${c.desc}</p><a class="text-link-red" href="#${slug(name)}">EXPLORE CITY →</a></div></article>`;
}
document.getElementById('home-city-cards').innerHTML = cityNames.map(makeCityCard).join('');
document.getElementById('all-city-cards').innerHTML = cityNames.map(makeCityCard).join('');
function makeInfoCard(item, fallback, alt) {
  const [title, description, img] = item;
  return `<article class="info-card"><img src="${img || fallback}" alt="${alt}: ${title}" loading="lazy"><div><h3>${title}</h3><p>${description}</p></div></article>`;
}
function showCity(name) {
  const c = cities[name]; if (!c) return;
  const sections = [
    ['Monuments', c.monuments, photoFallbacks.monument],
    ['Cultural Experiences', c.culture, photoFallbacks.culture],
    ['French Gastronomy', c.food, photoFallbacks.food],
    ['Restaurants', c.restaurants,photoFallbacks.restaurant],
    ['Hotels', c.hotels,photoFallbacks.hotel]
  ];
  let out = `<div class="city-hero" style="background-image:url('${c.img}')"><div><p class="eyebrow">${c.tag.toUpperCase()}</p><h1>${name}</h1><p>${c.desc}</p></div></div><section class="city-content-section"><p class="eyebrow">GET TO KNOW THE CITY</p><h2>Welcome to ${name}</h2><p class="muted">${c.desc} Explore its landmarks, local culture, regional food and places to stay.</p></section>`;
  sections.forEach(([title, items, fallback]) => {
    out += `<section class="city-content-section"><p class="eyebrow">DISCOVER ${name.toUpperCase()}</p><h2>${title}</h2>${title === 'Restaurants' || title === 'Hotels' ? '<span class="sample-label">PROJECT INFORMATION · CHECK DETAILS BEFORE VISITING</span>' : ''}<div class="info-grid">${items.map(item => makeInfoCard(item, fallback, title)).join('')}</div></section>`;
  });
  document.getElementById('city-detail-content').innerHTML = out;
}
function route() {
  const id = decodeURIComponent(location.hash.slice(1) || 'home');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const city = cityNames.find(n => slug(n) === id);
  let page = document.getElementById(id);
  if (city) { showCity(city); page = document.getElementById('city-detail'); }
  if (!page) page = document.getElementById('home');
  page.classList.add('active');
  document.querySelector('.nav').classList.remove('open');
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route); route();

const itinerary = {
  Nice: [
    [
      ['Castle Hill (Colline du Château)', 'Start your trip with panoramic views of Nice, the Mediterranean Sea and the Old Town.'],
      ['Cours Saleya Market', 'Explore the colourful flower and food market and discover local products.'],
      ['Socca at Chez Pipo', 'Finish the day by tasting Nice’s famous chickpea-flour speciality.']
    ],
    [
      ['Saint Nicholas Russian Orthodox Cathedral', 'Discover the impressive architecture and colourful domes of this historic cathedral.'],
      ['Matisse Museum and Cimiez', 'Explore the artistic heritage of Nice and discover works by Henri Matisse.'],
      ['Salade Niçoise at Chez Acchiardo', 'Enjoy a traditional Niçoise meal in a family-run restaurant.']
    ],
    [
      ['Palais Lascaris', 'Explore this beautiful 17th-century Baroque palace in the Old Town.'],
      ['Nice Carnival', 'Discover the city’s famous celebration, known for its parades, costumes and decorated floats.'],
      ['Pissaladière at La Merenda', 'End your visit with a traditional onion tart from Nice.']
    ]
  ],

  Lyon: [
    [
      ['Basilica of Notre-Dame de Fourvière', 'Visit the famous hilltop basilica and enjoy spectacular views over Lyon.'],
      ['Exploring the Traboules of Old Lyon', 'Discover historic passageways, hidden courtyards and Renaissance architecture.'],
      ['Quenelles de brochet', 'Taste Lyon’s traditional pike dumplings, often served with creamy Nantua sauce.']
    ],
    [
      ['Ancient Roman Theatres', 'Explore the impressive remains of ancient Lugdunum and discover Lyon’s Roman heritage.'],
      ['Lumière Museum', 'Learn about the Lumière brothers and the origins of cinema.'],
      ['Saucisson brioché', 'Try a famous regional speciality of sausage baked inside brioche bread.']
    ],
    [
      ['Saint-Jean Cathedral', 'Discover the Gothic architecture and astronomical clock in Old Lyon.'],
      ['Place Bellecour and the historic centre', 'Explore one of Lyon’s best-known squares and its surrounding streets.'],
      ['Tarte aux pralines roses', 'Complete your Lyon visit with a delicious traditional pink praline tart.']
    ]
  ],

  Strasbourg: [
    [
      ['Strasbourg Cathedral', 'Explore the magnificent Gothic cathedral and its famous astronomical clock.'],
      ['La Petite France', 'Walk through picturesque canals and streets lined with traditional half-timbered houses.'],
      ['Tarte Flambée (Flammekueche)', 'Taste a traditional Alsatian tart topped with cream, onions and bacon.']
    ],
    [
      ['Maison Kammerzell', 'Admire one of Strasbourg’s most famous historic buildings near the cathedral.'],
      ['Canal Boat Tour', 'Discover Strasbourg from the water while passing historic bridges and charming canals.'],
      ['Choucroute Garnie', 'Enjoy a traditional Alsatian dish made with fermented cabbage and accompaniments.']
    ],
    [
      ['Ponts Couverts and Barrage Vauban', 'Explore the historic bridges and defensive structures of Strasbourg.'],
      ['Alsatian Museum and European Quarter', 'Discover regional traditions and Strasbourg’s important European connections.'],
      ['Kougelhopf', 'Finish your trip by tasting a traditional Alsatian cake.']
    ]
  ],

  Bordeaux: [
    [
      ['Place de la Bourse and Miroir d’eau', 'Discover Bordeaux’s iconic square and its famous reflecting pool.'],
      ['La Cité du Vin', 'Explore interactive exhibitions about the history and culture of wine.'],
      ['Cannelé de Bordeaux', 'Taste the city’s famous caramelised pastry with its soft centre.']
    ],
    [
      ['Bordeaux Cathedral', 'Visit the impressive Gothic Cathédrale Saint-André.'],
      ['Bassins des Lumières', 'Experience immersive digital art exhibitions inside a former submarine base.'],
      ['Huîtres du Bassin d’Arcachon', 'Discover the region’s famous Atlantic oysters.']
    ],
    [
      ['Grosse Cloche', 'Admire the medieval belfry and one of Bordeaux’s historic city gates.'],
      ['Garonne Quays', 'Enjoy a relaxing walk along the beautiful riverside promenades.'],
      ['Entrecôte à la Bordelaise', 'Try a traditional steak dish served with a rich Bordeaux-style sauce.']
    ]
  ],

  Marseille: [
    [
      ['Notre-Dame de la Garde', 'Visit Marseille’s famous hilltop basilica and enjoy panoramic Mediterranean views.'],
      ['Le Panier and MuCEM', 'Explore the colourful historic neighbourhood and discover Mediterranean culture at the museum.'],
      ['Bouillabaisse at Chez Fonfon', 'Experience Marseille’s famous traditional fish stew.']
    ],
    [
      ['Vieux-Port and Fort Saint-Jean', 'Discover the historic harbour and its impressive 17th-century fortifications.'],
      ['Calanques National Park', 'Enjoy the spectacular coastal scenery, limestone cliffs and turquoise coves.'],
      ['Navettes de Marseille', 'Taste the traditional boat-shaped biscuits flavoured with orange blossom.']
    ],
    [
      ['Palais Longchamp', 'Explore the grand 19th-century palace, its fountains and beautiful architecture.'],
      ['Marseille Cathedral', 'Visit the impressive cathedral overlooking the waterfront.'],
      ['Panisse', 'Finish your visit with a local chickpea-flour speciality.']
    ]
  ]
};
function activityFor(city, day, period, interest) {
  const cityDays = itinerary[city];

  if (!cityDays||day < 1 || day > 3) {
    return ['Explore the city', 'Discover the local attractions, culture and food.'];
  }

  // Repeat the three-day programme for trips longer than three days.
  const activities = cityDays[day - 1];
   //Each Day have three different activities:
  // 0 = morning, 1 = afternoon, 2 = evening.
  const activity=activities[period];
  return activity
  };

document.getElementById('guide-form').addEventListener('submit', e => {
  e.preventDefault();

  const city = document.getElementById('guide-city').value;
  const days = Number(document.getElementById('guide-days').value);
  const interest = document.getElementById('guide-interest').value;
  const style = document.getElementById('guide-style').value;

  const output = document.getElementById('itinerary-output');

  if (!itinerary[city] || !Number.isInteger(days) || days < 1||days > 3) {
    output.innerHTML = '<p>Please select a valid city and Choose between 1 and 3 days.</p>';
    return;
  }

  const periods = ['MORNING', 'AFTERNOON', 'EVENING'];

  let html = `
    <div class="itinerary-title">
      <p class="eyebrow">YOUR PERSONALISED PLAN</p>
      <h2>${days} ${days === 1 ? 'day' : 'days'} in ${city}</h2>
      <p class="muted">A ${style} itinerary with ideas for every part of the day.</p>
    </div>
  `;

  for (let d = 1; d <= days; d++) {
    html += `
      <article class="day-card">
        <div class="day-head">
          <h3>Day ${d}</h3>
          <span>${city.toUpperCase()}</span>
        </div>
        <div class="activity-grid">
    `;

    periods.forEach((period, i) => {
      const activity = activityFor(city, d, i, interest);

      html += `
        <div class="activity">
          <b>${period}</b>
          <h4>${activity[0]}</h4>
          <p>${activity[1]}</p>
        </div>
      `;
    });

    html += `
        </div>
      </article>
    `;
  }

  html += `
    <div class="itinerary-actions">
      <button class="btn btn-outline" type="button" onclick="window.print()">
        Print itinerary
      </button>
      <button class="btn btn-dark" type="button" onclick="document.getElementById('guide-form').requestSubmit()">
        Regenerate ↻
      </button>
    </div>
  `;

  output.innerHTML = html;
  output.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('guide-form').addEventListener('submit', e => {
  e.preventDefault();
  const city = document.getElementById('guide-city').value;
  const days = Number(document.getElementById('guide-days').value);
  const interest = document.getElementById('guide-interest').value;
  const style = document.getElementById('guide-style').value;
  const periods = ['MORNING', 'AFTERNOON', 'EVENING'];
  let html = `<div class="itinerary-title"><p class="eyebrow">YOUR PERSONALISED PLAN</p><h2>${days} ${days === 1 ? 'day' : 'days'} in ${city}</h2><p class="muted">A ${style} itinerary with ideas for every part of the day.</p></div>`;
  for (let d = 1; d <= days; d++) {
    html += `<article class="day-card"><div class="day-head"><h3>Day ${d}</h3><span>${city.toUpperCase()}</span></div><div class="activity-grid">`;
    periods.forEach((period, i) => { const a = activityFor(city, d, i, interest); html += `<div class="activity"><b>${period}</b><h4>${a[0]}</h4><p>${a[1]}</p></div>`; });
    html += `</div></article>`;
  }
  html += `<div class="itinerary-actions"><button class="btn btn-outline" type="button" onclick="window.print()">Print itinerary</button><button class="btn btn-dark" type="button" onclick="document.getElementById('guide-form').requestSubmit()">Regenerate ↻</button></div>`;
  document.getElementById('itinerary-output').innerHTML = html;
  document.getElementById('itinerary-output').scrollIntoView({behavior:'smooth', block:'start'});
});
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault(); document.getElementById('contact-feedback').textContent = 'Thank you! This demo form has received your message.'; e.target.reset();
});
