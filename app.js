const allGuidesData = {
    ristoranti: {
        it: {
            homepage: {
                title: "Guida Ristoranti",
                subtitle: "Milano",
                buttons: {
                    tradizionali: "🍽️ Tradizionali",
                    etnici: "🌍 Etnici",
                    moda: "✨ Alla Moda",
                    pizzerie: "🍕 Pizzerie",
                    vegani: "🌱 Vegani e Vegetariani",
                    suggerimenti: "💡 Itinerari Suggeriti"
                }
            },
            pages: {
                tradizionali: {
                    title: "Ristoranti Tradizionali",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Al Garghet", details: "Cotoletta alla Milanese spessa con l'osso. Atmosfera rurale e romantica, ideale per un'occasione speciale.", dates: "50-70€" },
                        { name: "La Pobbia 1850", details: "Risotto giallo con Ossobuco in gremolada. Bib Gourmand Michelin. Un'istituzione storica per la cucina milanese autentica.", dates: "60-80€" }
                    ]
                },
                etnici: {
                    title: "Ristoranti Etnici",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Ichikawa", details: "Menù Omakase. Giapponese (Alta Cucina). Per veri intenditori.", dates: "120-150€+" },
                        { name: "Shiro Poporoya", details: "Chirashi. Giapponese (Tradizionale). Un'istituzione leggendaria.", dates: "35-50€" }
                    ]
                },
                moda: {
                    title: "Ristoranti 'Alla Moda'",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Enrico Bartolini al Mudec", details: "Menù Degustazione. 3 Stelle Michelin. Il vertice assoluto della gastronomia milanese.", dates: "240€+" },
                        { name: "Cracco in Galleria", details: "Cucina d'Autore. 1 Stella Michelin. Location iconica e innovazione.", dates: "210€" }
                    ]
                },
                pizzerie: {
                    title: "Pizzerie",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Assaje", details: "Pizza 'Assaje' (zucca e gamberi). Napoletana Tradizionale. Popolare e vivace.", dates: "12-18€" },
                        { name: "Dry Milano", details: "The Bengal Shrimp, 5 Formaggi. Gourmet & Cocktail Pairing. Icona di stile.", dates: "16-28€" }
                    ]
                },
                vegani: {
                    title: "Vegani e Vegetariani",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Joia", details: "Alta cucina vegetariana. Unica stella Michelin vegetariana in Europa. Un'esperienza gastronomica indimenticabile guidata dallo chef Pietro Leemann.", dates: "100€+" }
                    ]
                },
                suggerimenti: {
                    title: "Itinerari Suggeriti",
                    itineraries: [
                        { title: "Un Giorno da Milanese DOC", description: "Un'immersione nella tradizione. Iniziate con un pranzo da La Pobbia 1850. Per cena, l'atmosfera artistica della Premiata Trattoria Arlati." }
                    ]
                }
            }
        },
        en: {
            homepage: {
                title: "Milan Restaurant Guide",
                subtitle: "Milan",
                buttons: {
                    tradizionali: "🍽️ Traditional",
                    etnici: "🌍 Ethnic",
                    moda: "✨ Trendy",
                    pizzerie: "🍕 Pizzerias",
                    vegani: "🌱 Vegan & Vegetarian",
                    suggerimenti: "💡 Suggested Itineraries"
                }
            },
            pages: {
                tradizionali: {
                    title: "Traditional Restaurants",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Al Garghet", details: "Thick bone-in Cotoletta alla Milanese. Rustic and romantic atmosphere, ideal for a special occasion.", dates: "50-70€" },
                        { name: "La Pobbia 1850", details: "Yellow Risotto with Ossobuco in gremolada. Michelin Bib Gourmand. A historic institution for authentic Milanese cuisine.", dates: "60-80€" }
                    ]
                },
                etnici: {
                    title: "Ethnic Restaurants",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Ichikawa", details: "Omakase Menu. Japanese (Haute Cuisine). For true connoisseurs.", dates: "120-150€+" },
                        { name: "Shiro Poporoya", details: "Chirashi. Japanese (Traditional). A legendary institution.", dates: "35-50€" }
                    ]
                },
                moda: {
                    title: "Trendy Restaurants",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Enrico Bartolini al Mudec", details: "Tasting Menu. 3 Michelin Stars. The absolute peak of Milanese gastronomy.", dates: "240€+" },
                        { name: "Cracco in Galleria", details: "Signature Cuisine. 1 Michelin Star. Iconic location and innovation.", dates: "210€" }
                    ]
                },
                pizzerie: {
                    title: "Pizzerias",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Assaje", details: "Pizza 'Assaje' (pumpkin and shrimp). Traditional Neapolitan. Popular and lively.", dates: "12-18€" },
                        { name: "Dry Milano", details: "The Bengal Shrimp, 5 Cheeses. Gourmet & Cocktail Pairing. A style icon.", dates: "16-28€" }
                    ]
                },
                vegani: {
                    title: "Vegan & Vegetarian",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Joia", details: "Haute vegetarian cuisine. The only vegetarian Michelin star in Europe. An unforgettable gastronomic experience led by chef Pietro Leemann.", dates: "100€+" }
                    ]
                },
                suggerimenti: {
                    title: "Suggested Itineraries",
                    itineraries: [
                        { title: "A Day as a True Milanese", description: "An immersion in tradition. Start with a lunch at La Pobbia 1850. For dinner, the artistic atmosphere of Premiata Trattoria Arlati." }
                    ]
                }
            }
        }
    },
    settembre: {
        it: {
            homepage: {
                title: "Guida Settembre",
                subtitle: "Milano",
                buttons: {
                    musica: "🎵 Musica & Concerti",
                    cultura: "🏛️ Mostre & Cultura",
                    moda: "✨ Moda & Design",
                    sport: "⚽ Eventi Sportivi",
                    insolito: "✨ Insolito & Esclusivo",
                    itinerari: "💡 Itinerari Suggeriti"
                }
            },
            pages: {
                musica: {
                    title: "Musica & Concerti",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Tananai", details: "Il popolare cantautore si esibirà all'Ippodromo SNAI San Siro. I biglietti partono da 49,00 € per il posto unico e da 59,00 € per il posto in piedi 'PIT'.", dates: "05/09/2025, ore 21:00.", address: "Ippodromo SNAI San Siro, Piazzale dello Sport, 16, Milano." },
                        { name: "Salmo", details: "Concerto rap alla Fiera Milano Live. I biglietti per Salmo partono da 44,85 €.", dates: "06/09/2025.", address: "Fiera Milano Arena Concerti, Cargo 1 - Viale delle Ferrovie, Rho (Milano)." }
                    ]
                },
                cultura: {
                    title: "Mostre & Cultura",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Man Ray - Forme di Luce", details: "Una grande retrospettiva dedicata a uno dei geni più eclettici del XX secolo aprirà al Palazzo Reale.", dates: "Dal 20/09/2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milano." },
                        { name: "Mario Giacomelli - Il fotografo e il poeta", details: "Una retrospettiva nel centenario della nascita di Giacomelli si conclude a Palazzo Reale.", dates: "Fino al 07/09/2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milano." }
                    ]
                },
                moda: {
                    title: "Moda & Design",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Milano Fashion Week Women's", details: "La settimana della moda si svolge in diverse location. Alcuni eventi, come quelli del Fashion Hub a Palazzo Giureconsulti, sono aperti al pubblico e gratuiti, ma spesso richiedono la registrazione.", dates: "23 - 29 Settembre.", address: "Diversi luoghi in città." }
                    ]
                },
                sport: {
                    title: "Eventi Sportivi",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Formula 1 Gran Premio d'Italia", details: "L'Autodromo Nazionale di Monza ospiterà la 96ª edizione del Gran Premio.", dates: "05 - 07 Settembre.", address: "Autodromo Nazionale di Monza, Viale di Vedano, 5, Monza (MB)." }
                    ]
                },
                insolito: {
                    title: "Insolito & Esclusivo",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Visita a Villa Necchi Campiglio", details: "Un gioiello dell'Art Déco con la prima piscina privata di Milano, perfetto per un'esperienza d'arte esclusiva.", dates: "Mart-Dom: 10:00 - 18:00.", address: "Via Mozart, 14, Milano." }
                    ]
                },
                itinerari: {
                    title: "Itinerari Suggeriti",
                    itineraries: [
                        { title: "Rientro in Musica", description: "Inizia il mese con i concerti di Salmo e Tananai, e per un'esperienza fuori porta, visita la Sagra dei Crotti a Chiavenna, che celebra i sapori e le tradizioni locali." }
                    ]
                }
            }
        },
        en: {
            homepage: {
                title: "September Guide",
                subtitle: "Milan",
                buttons: {
                    musica: "🎵 Music & Concerts",
                    cultura: "🏛️ Exhibitions & Culture",
                    moda: "✨ Fashion & Design",
                    sport: "⚽ Sports Events",
                    insolito: "✨ Unusual & Exclusive",
                    itinerari: "💡 Suggested Itineraries"
                }
            },
            pages: {
                musica: {
                    title: "Music & Concerts",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Tananai", details: "The popular singer-songwriter will perform at the SNAI San Siro Hippodrome. Tickets start from €49.00 for general admission and €59.00 for the 'PIT' standing area.", dates: "Sept 05, 2025, 9:00 PM.", address: "SNAI San Siro Hippodrome, Piazzale dello Sport, 16, Milan." },
                        { name: "Salmo", details: "Rap concert at Fiera Milano Live. Tickets for Salmo start from €44.85.", dates: "Sept 06, 2025.", address: "Fiera Milano Concert Arena, Cargo 1 - Viale delle Ferrovie, Rho (Milan)." }
                    ]
                },
                cultura: {
                    title: "Exhibitions & Culture",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Man Ray - Forms of Light", details: "A major retrospective dedicated to one of the most eclectic geniuses of the 20th century will open at Palazzo Reale.", dates: "Starting Sept 20, 2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milan." },
                        { name: "Mario Giacomelli - The Photographer and the Poet", details: "An important retrospective on the centenary of Giacomelli's birth is concluding at Palazzo Reale.", dates: "Until Sept 07, 2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milan." }
                    ]
                },
                moda: {
                    title: "Fashion & Design",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Milano Fashion Week Women's", details: "The Fashion Week takes place in various locations. Some events, such as those at the Fashion Hub in Palazzo Giureconsulti, are open to the public and free, but often require registration.", dates: "Sept 23 - 29.", address: "Various locations in the city." }
                    ]
                },
                sport: {
                    title: "Sports Events",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Formula 1 Italian Grand Prix", details: "The Monza National Autodrome will host the 96th edition of the Grand Prix.", dates: "Sept 05 - 07.", address: "Autodromo Nazionale di Monza, Viale di Vedano, 5, Monza (MB)." }
                    ]
                },
                insolito: {
                    title: "Unusual & Exclusive",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Visit to Villa Necchi Campiglio", details: "An Art Deco gem with Milan's first private swimming pool, perfect for an exclusive art experience.", dates: "Tue-Sun: 10:00 AM - 6:00 PM.", address: "Via Mozart, 14, Milan." }
                    ]
                },
                itinerari: {
                    title: "Suggested Itineraries",
                    itineraries: [
                        { title: "A Musical Return", description: "Start the month with concerts by Salmo and Tananai, and for an out-of-town experience, visit the Sagra dei Crotti in Chiavenna, celebrating local flavors and traditions." }
                    ]
                }
            }
        }
    },
    nolo: {
        it: {
            homepage: {
                title: "Mappa di NoLo",
                subtitle: "Guida ai luoghi iconici e segreti del quartiere.",
                buttons: {
                    vedere: "🗺️ Cosa vedere e fare a NoLo",
                    mangiare: "🍽️ Dove mangiare e bere",
                    arrivare: "📍 Come arrivare a NoLo"
                }
            },
            pages: {
                vedere: {
                    title: "Cosa vedere e fare a NoLo",
                    infoLabel: "Descrizione:",
                    activities: [
                        { name: "Street Art", details: "NoLo è un museo a cielo aperto. Lungo le sue strade, specialmente in Via Pontano, troverai numerosi graffiti e murales che raccontano la trasformazione del quartiere.", dates: "Via Pontano" },
                        { name: "Piazza Morbegno", details: "Considerata il cuore pulsante di NoLo, è un punto di ritrovo con locali e un'atmosfera da 'piccolo paese'.", dates: "Piazza Morbegno" }
                    ]
                },
                mangiare: {
                    title: "Dove mangiare e bere",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Ghe Pensi Mi", details: "Un must per l'aperitivo a NoLo, con birre artigianali, eventi serali e un'atmosfera molto amichevole.", dates: "Piazza Morbegno, 2" },
                        { name: "Nodo Bar", details: "Un nuovo spazio polifunzionale che unisce musica, gastronomia e cultura.", dates: "Via N. D'Apulia, 9" }
                    ]
                },
                arrivare: {
                    title: "Come arrivare a NoLo",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Metro", details: "La linea M1 (rossa) con fermate a Rovereto e Pasteur ti porta direttamente nel cuore di NoLo. La fermata Loreto (M1 e M2) è molto vicina al confine del quartiere.", dates: "M1 (Rossa)" },
                        { name: "Bus", details: "Diverse linee di autobus servono il quartiere, tra cui 62, 87, 90, 174, NM1, 56.", dates: "Varie linee" }
                    ]
                }
            }
        },
        en: {
            homepage: {
                title: "NoLo Map",
                subtitle: "A guide to the iconic and hidden gems of the neighborhood.",
                buttons: {
                    vedere: "🗺️ What to see and do in NoLo",
                    mangiare: "🍽️ Where to eat and drink",
                    arrivare: "📍 How to get to NoLo"
                }
            },
            pages: {
                vedere: {
                    title: "What to see and do in NoLo",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Street Art", details: "NoLo is an open-air museum. Along its streets, especially on Via Pontano, you'll find numerous graffiti and murals that tell the story of the neighborhood's transformation.", dates: "Via Pontano" },
                        { name: "Piazza Morbegno", details: "Considered the beating heart of NoLo, it's a meeting point with local pubs and a 'small-town' atmosphere.", dates: "Piazza Morbegno" }
                    ]
                },
                mangiare: {
                    title: "Where to eat and drink",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Ghe Pensi Mi", details: "A must-visit for aperitivo in NoLo, with craft beers, evening events, and a very friendly atmosphere.", dates: "Piazza Morbegno, 2" },
                        { name: "Nodo Bar", details: "A new multi-purpose space that combines music, gastronomy, and culture.", dates: "Via N. D'Apulia, 9" }
                    ]
                },
                arrivare: {
                    title: "How to get to NoLo",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Metro", details: "The M1 (red) line with stops at Rovereto and Pasteur takes you directly to the heart of NoLo. The Loreto (M1 and M2) stop is also very close to the neighborhood's border.", dates: "M1 (Red)" },
                        { name: "Bus", details: "Several bus lines serve the neighborhood, including 62, 87, 90, 174, NM1, 56.", dates: "Various lines" }
                    ]
                }
            }
        }
    }
};

let currentGuide = null;
let currentLang = 'it';

function loadGuide(guideId) {
    currentGuide = guideId;
    document.getElementById('welcome').classList.remove('active');
    document.getElementById('guide-content').classList.add('active');
    updateGuideUI();
}

function showWelcomePage() {
    document.getElementById('guide-content').classList.remove('active');
    document.getElementById('welcome').classList.add('active');
    updateWelcomeUI();
}

function updateWelcomeUI() {
    const welcomeText = {
        it: {
            title: "Guida a Milano",
            subtitle: "Scegli l'esperienza perfetta per te",
            ristoranti: "🍽️ Guida Ristoranti",
            settembre: "📅 Guida Settembre",
            nolo: "🗺️ Mappa di NoLo"
        },
        en: {
            title: "Milan Guide",
            subtitle: "Choose your perfect experience",
            ristoranti: "🍽️ Restaurant Guide",
            settembre: "📅 September Guide",
            nolo: "🗺️ NoLo Map"
        }
    };

    const textData = welcomeText[currentLang];
    document.getElementById('welcome-title').innerText = textData.title;
    document.getElementById('welcome-subtitle').innerText = textData.subtitle;
    document.getElementById('btn-ristoranti').innerText = textData.ristoranti;
    document.getElementById('btn-settembre').innerText = textData.settembre;
    document.getElementById('btn-nolo').innerText = textData.nolo;
}

function updateGuideUI() {
    const guideData = allGuidesData[currentGuide][currentLang];
    const pageElement = document.getElementById('guide-content');

    const backButtonText = currentLang === 'it' ? "← Torna alle guide" : "← Back to guides";
    
    let content = `
        <div class="p-6 bg-white min-h-screen">
            <header class="flex items-center mb-6 pb-4 border-b">
                <button onclick="showWelcomePage()" style="color:var(--magenta);" class="font-bold text-lg mr-4">${backButtonText}</button>
                <h2 class="text-2xl font-bold text-ottanio">${guideData.homepage.title}</h2>
            </header>
            <main class="space-y-4">`;
    
    for (const key in guideData.homepage.buttons) {
        if (guideData.homepage.buttons.hasOwnProperty(key)) {
            const buttonText = guideData.homepage.buttons[key];
            content += `<button onclick="showPage('${key}')" class="w-full btn-category font-bold py-5 rounded-lg shadow-md text-lg">${buttonText}</button>`;
        }
    }

    content += `
            </main>
        </div>
    `;

    pageElement.innerHTML = content;
}

function showPage(pageId) {
    const guideData = allGuidesData[currentGuide][currentLang];
    const data = guideData.pages[pageId];
    const pageElement = document.getElementById('guide-content');

    let mainContent;
    if (data.itineraries) {
        mainContent = data.itineraries.map(createItineraryCard).join('');
    } else if (data.activities) {
        mainContent = data.activities.map(createActivityCard).join('');
    } else {
        mainContent = `<div class="p-4 text-center">Nessun contenuto disponibile.</div>`;
    }

    const backButtonText = currentLang === 'it' ? "← Torna alla home" : "← Back to home";
    const content = `
        <div class="p-6 bg-white min-h-screen">
            <header class="flex items-center mb-6 pb-4 border-b">
                <button onclick="updateGuideUI()" style="color:var(--magenta);" class="font-bold text-lg mr-4">${backButtonText}</button>
                <h2 class="text-2xl font-bold text-ottanio">${data.title}</h2>
            </header>
            <main>
                ${mainContent}
            </main>
        </div>
    `;
    pageElement.innerHTML = content;
}

function createActivityCard(activity) {
    const infoLabel = allGuidesData[currentGuide][currentLang].pages[Object.keys(allGuidesData[currentGuide][currentLang].pages)[0]].infoLabel;
    const addressHtml = activity.address ? `<p class="mt-2"><strong class="font-semibold">Indirizzo:</strong> ${activity.address}</p>` : '';
    return `
        <div class="card bg-white border-l-4 border-l-[var(--magenta)] rounded-r-lg p-4 mb-4 shadow-sm">
            <div class="flex justify-between items-start">
                <h3 class="font-bold text-xl text-ottanio">${activity.name}</h3>
                <span class="text-sm font-semibold text-magenta bg-gray-100 px-2 py-1 rounded-full" style="color:var(--magenta); background-color: var(--light-magenta);">${activity.dates}</span>
            </div>
            <div class="bg-gray-50 p-3 rounded-md text-ottanio mt-3">
                <p><strong class="font-semibold">${infoLabel}</strong> ${activity.details}</p>
                ${addressHtml}
            </div>
        </div>
    `;
}

function createItineraryCard(itinerary) {
    return `
        <div class="card bg-white border-l-4 border-l-[var(--verde)] rounded-r-lg p-4 mb-4 shadow-sm">
            <h3 class="font-bold text-xl text-ottanio">${itinerary.title}</h3>
            <p class="mt-2 text-gray-600">${itinerary.description}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    updateWelcomeUI();
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            currentLang = event.target.dataset.lang;
            if (currentGuide) {
                updateGuideUI();
            } else {
                updateWelcomeUI();
            }
        });
    });
});
