const appTexts = {
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
                    { 
                        name: "Tananai", 
                        details: "Il popolare cantautore si esibirà all'Ippodromo SNAI San Siro. I biglietti partono da 49,00 € per il posto unico e da 59,00 € per il posto in piedi 'PIT'.", 
                        dates: "05/09/2025, ore 21:00.",
                        address: "Ippodromo SNAI San Siro, Piazzale dello Sport, 16, Milano."
                    },
                    { 
                        name: "Salmo", 
                        details: "Concerto rap alla Fiera Milano Live. I biglietti per Salmo partono da 44,85 €.", 
                        dates: "06/09/2025.",
                        address: "Fiera Milano Arena Concerti, Cargo 1 - Viale delle Ferrovie, Rho (Milano)."
                    },
                    { 
                        name: "Emis Killa", 
                        details: "Il concerto di Emis Killa è in programma alla Fiera Milano Live, una delle nuove venue per la musica dal vivo.", 
                        dates: "10/09/2025.",
                        address: "Fiera Milano Arena Concerti, Cargo 1 - Viale delle Ferrovie, Rho (Milano)."
                    },
                    { 
                        name: "Sfera Ebbasta & Shiva", 
                        details: "Un unico spettacolo con due grandi nomi del rap italiano alla Fiera Milano Live, con biglietti a partire da 57,50 €.", 
                        dates: "13/09/2025, ore 21:00.",
                        address: "Fiera Milano Live, Rho (Milano)."
                    },
                    { 
                        name: "Ghali", 
                        details: "Il suo show-evento 'Gran Teatro' promette uno spettacolo unico alla Fiera Milano Live, con biglietti a partire da 43,70 €.", 
                        dates: "20/09/2025, ore 21:00.",
                        address: "Fiera Milano Arena Concerti, Cargo 1 - Viale delle Ferrovie, Rho (Milano)."
                    },
                    { 
                        name: "The Offspring", 
                        details: "La band punk rock si esibirà all'Unipol Forum.", 
                        dates: "29/09/2025.",
                        address: "Unipol Forum, Via G. di Vittorio, 6, Assago (MI)."
                    },
                    {
                        name: "Mito SettembreMusica",
                        details: "Festival di musica classica in varie location storiche della città. La maggior parte dei concerti ha un costo e si svolge in location storiche.",
                        dates: "Tutto il mese di settembre.",
                        address: "Varie location, come il Teatro Dal Verme o la Chiesa di San Giovanni Battista alla Creta."
                    }
                ]
            },
            cultura: {
                title: "Mostre & Cultura",
                infoLabel: "Informazioni:",
                activities: [
                    { name: "Man Ray - Forme di Luce", details: "Una grande retrospettiva dedicata a uno dei geni più eclettici del XX secolo aprirà al Palazzo Reale.", dates: "Dal 20/09/2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milano." },
                    { name: "Mario Giacomelli - Il fotografo e il poeta", details: "Una retrospettiva nel centenario della nascita di Giacomelli si conclude a Palazzo Reale.", dates: "Fino al 07/09/2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milano." },
                    { name: "Una Collezione Inattesa", details: "Un percorso sull'arte italiana degli anni Sessanta.", dates: "Fino al 05/10/2025", address: "Gallerie d'Italia, Piazza della Scala, 6, Milano." },
                    { name: "Inequalities - 24ª Esposizione Internazionale", details: "Una mostra che esplora le disuguaglianze globali attraverso arte, design e architettura.", dates: "Fino al 09/11/2025", address: "Triennale di Milano, Viale Emilio Alemagna, 6, Milano." }
                ]
            },
            moda: {
                title: "Moda & Design",
                infoLabel: "Informazioni:",
                activities: [
                    { name: "Milano Fashion Week Women's", details: "La settimana della moda si svolge in diverse location. Alcuni eventi, come quelli del Fashion Hub a Palazzo Giureconsulti, sono aperti al pubblico e gratuiti, ma spesso richiedono la registrazione.", dates: "23 - 29 Settembre.", address: "Diversi luoghi in città." },
                    { name: "Milano Fashion&Jewels", details: "Un evento fieristico dedicato ad accessori e gioielli.", dates: "20 - 23 Settembre.", address: "Fiera Milano, Rho (Milano)." },
                    { name: "Milano Beauty Week", details: "Una settimana dedicata a profumi, cosmetica e benessere, con un ricco calendario di eventi.", dates: "17 - 21 Settembre.", address: "Varie location in città." }
                ]
            },
            sport: {
                title: "Eventi Sportivi",
                infoLabel: "Informazioni:",
                activities: [
                    { name: "Formula 1 Gran Premio d'Italia", details: "L'Autodromo Nazionale di Monza ospiterà la 96ª edizione del Gran Premio.", dates: "05 - 07 Settembre.", address: "Autodromo Nazionale di Monza, Viale di Vedano, 5, Monza (MB)." },
                    { name: "Giornata dello Sport", details: "Un evento gratuito con la partecipazione di diverse associazioni sportive.", dates: "21 Settembre.", address: "Parco Nord, Via Claudio Treves, 1, Cinisello Balsamo (MI)." }
                ]
            },
            insolito: {
                title: "Insolito & Esclusivo",
                infoLabel: "Informazioni:",
                activities: [
                    { name: "Visita a Villa Necchi Campiglio", details: "Un gioiello dell'Art Déco con la prima piscina privata di Milano, perfetto per un'esperienza d'arte esclusiva.", dates: "Mart-Dom: 10:00 - 18:00.", address: "Via Mozart, 14, Milano." },
                    { name: "Tour della Milano Sotterranea", details: "Esplora aree archeologiche nascoste, come la Cripta di San Sepolcro o la Cripta di San Giovanni in Conca, con tour di 90-120 minuti. Il costo parte da 33,00 €.", dates: "Variabili, su prenotazione.", address: "Varie location." },
                    { name: "Candlelight Concerts", details: "Concerti a lume di candela in location suggestive per un'atmosfera intima e magica.", dates: "Variabili, da verificare online.", address: "Varie location, come Villa Clerici." },
                    { name: "Bagni Misteriosi", details: "Una storica piscina riqualificata che offre un'atmosfera suggestiva, quasi teatrale. È possibile nuotare e prendere il sole, con ingresso a pagamento.", dates: "Variabili.", address: "Via Carlo Botta, 18, Milano." },
                    { name: "Degustazione vini privata", details: "Tour privato con un sommelier per una degustazione di vini italiani in un'enoteca esclusiva. Il costo parte da circa 88 € a persona.", dates: "Variabili, su prenotazione.", address: "Vari luoghi, da definire in base alla prenotazione." }
                ]
            },
            itinerari: {
                title: "Itinerari Suggeriti",
                itineraries: [
                    { title: "Rientro in Musica", description: "Inizia il mese con i concerti di Salmo e Tananai, e per un'esperienza fuori porta, visita la Sagra dei Crotti a Chiavenna, che celebra i sapori e le tradizioni locali." },
                    { title: "Tra Rap e Tradizione", description: "Un itinerario che unisce la cultura moderna dei concerti di Sfera Ebbasta & Shiva con la tradizione del festival del vino Eroico Rosso a Tirano." },
                    { title: "Sotto i Riflettori della Moda", description: "Immergiti nell'atmosfera della Milano Fashion Week Women's, esplorando le vie del Quadrilatero della moda e partecipando agli eventi aperti al pubblico, previa registrazione." }
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
                    { 
                        name: "Tananai", 
                        details: "The popular singer-songwriter will perform at the SNAI San Siro Hippodrome. Tickets start from €49.00 for general admission and €59.00 for the 'PIT' standing area.", 
                        dates: "Sept 05, 2025, 9:00 PM.",
                        address: "SNAI San Siro Hippodrome, Piazzale dello Sport, 16, Milan."
                    },
                    { 
                        name: "Salmo", 
                        details: "Rap concert at Fiera Milano Live. Tickets for Salmo start from €44.85.", 
                        dates: "Sept 06, 2025.",
                        address: "Fiera Milano Concert Arena, Cargo 1 - Viale delle Ferrovie, Rho (Milan)."
                    },
                    { 
                        name: "Emis Killa", 
                        details: "The Emis Killa concert is scheduled at Fiera Milano Live, one of the new venues for live music.", 
                        dates: "Sept 10, 2025.",
                        address: "Fiera Milano Concert Arena, Cargo 1 - Viale delle Ferrovie, Rho (Milan)."
                    },
                    { 
                        name: "Sfera Ebbasta & Shiva", 
                        details: "A single show with two big names in Italian rap at Fiera Milano Live, with tickets starting from €57.50.", 
                        dates: "Sept 13, 2025, 9:00 PM.",
                        address: "Fiera Milano Live, Rho (Milan)."
                    },
                    { 
                        name: "Ghali", 
                        details: "His 'Gran Teatro' show-event promises a unique spectacle at Fiera Milano Live, with tickets starting from €43.70.", 
                        dates: "Sept 20, 2025, 9:00 PM.",
                        address: "Fiera Milano Concert Arena, Cargo 1 - Viale delle Ferrovie, Rho (Milan)."
                    },
                    { 
                        name: "The Offspring", 
                        details: "The punk rock band will perform at the Unipol Forum.", 
                        dates: "Sept 29, 2025.",
                        address: "Unipol Forum, Via G. di Vittorio, 6, Assago (MI)."
                    },
                    {
                        name: "Mito SettembreMusica",
                        details: "A classical music festival held in various historic locations across the city. Most concerts have a cost and take place in historical venues.",
                        dates: "Throughout the month of September.",
                        address: "Various locations, such as Teatro Dal Verme or the Church of San Giovanni Battista alla Creta."
                    }
                ]
            },
            cultura: {
                title: "Exhibitions & Culture",
                infoLabel: "Info:",
                activities: [
                    { name: "Man Ray - Forms of Light", details: "A major retrospective dedicated to one of the most eclectic geniuses of the 20th century will open at Palazzo Reale.", dates: "Starting Sept 20, 2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milan." },
                    { name: "Mario Giacomelli - The Photographer and the Poet", details: "An important retrospective on the centenary of Giacomelli's birth is concluding at Palazzo Reale.", dates: "Until Sept 07, 2025", address: "Palazzo Reale, Piazza del Duomo, 12, Milan." },
                    { name: "An Unexpected Collection", details: "A journey through Italian art of the 1960s.", dates: "Until Oct 05, 2025", address: "Gallerie d'Italia, Piazza della Scala, 6, Milan." },
                    { name: "Inequalities - 24ª Esposizione Internazionale", details: "An exhibition that explores global inequalities through art, design, and architecture.", dates: "Until Nov 09, 2025", address: "Triennale di Milano, Viale Emilio Alemagna, 6, Milan." }
                ]
            },
            moda: {
                title: "Fashion & Design",
                infoLabel: "Info:",
                activities: [
                    { name: "Milano Fashion Week Women's", details: "The Fashion Week takes place in various locations. Some events, such as those at the Fashion Hub in Palazzo Giureconsulti, are open to the public and free, but often require registration.", dates: "Sept 23 - 29.", address: "Various locations in the city." },
                    { name: "Milano Fashion&Jewels", details: "A trade show dedicated to accessories and jewelry.", dates: "Sept 20 - 23.", address: "Fiera Milano, Rho (Milan)." },
                    { name: "Milano Beauty Week", details: "A week dedicated to fragrance, cosmetics, and wellness, with a packed schedule of events.", dates: "Sept 17 - 21.", address: "Various locations in the city." }
                ]
            },
            sport: {
                title: "Sports Events",
                infoLabel: "Info:",
                activities: [
                    { name: "Formula 1 Italian Grand Prix", details: "The Monza National Autodrome will host the 96th edition of the Grand Prix.", dates: "Sept 05 - 07.", address: "Autodromo Nazionale di Monza, Viale di Vedano, 5, Monza (MB)." },
                    { name: "Giornata dello Sport", details: "A free event with the participation of various sports associations.", dates: "Sept 21.", address: "Parco Nord, Via Claudio Treves, 1, Cinisello Balsamo (MI)." }
                ]
            },
            insolito: {
                title: "Unusual & Exclusive",
                infoLabel: "Info:",
                activities: [
                    { name: "Visit to Villa Necchi Campiglio", details: "An Art Deco gem with Milan's first private swimming pool, perfect for an exclusive art experience.", dates: "Tue-Sun: 10:00 AM - 6:00 PM.", address: "Via Mozart, 14, Milan." },
                    { name: "Underground Milan Tour", details: "Explore hidden archaeological areas, such as the Crypt of San Sepolcro or the Crypt of San Giovanni in Conca, with tours of 90-120 minutes. The cost starts from €33.00.", dates: "Variable, by reservation.", address: "Various locations." },
                    { name: "Candlelight Concerts", details: "Concerts by candlelight in evocative locations for an intimate and magical atmosphere.", dates: "Variable, check online for dates.", address: "Various locations, such as Villa Clerici." },
                    { name: "Bagni Misteriosi", details: "A historic, redeveloped swimming pool that offers a suggestive, almost theatrical atmosphere. It's possible to swim and sunbathe; paid admission is required.", dates: "Variable.", address: "Via Carlo Botta, 18, Milan." },
                    { name: "Private Wine Tasting", details: "A private tour with a sommelier for an Italian wine tasting in an exclusive wine shop. The cost starts from around €88 per person.", dates: "Variable, by reservation.", address: "Various locations, to be determined upon booking." }
                ]
            },
            itinerari: {
                title: "Suggested Itineraries",
                itineraries: [
                    { title: "A Musical Return", description: "Start the month with concerts by Salmo and Tananai, and for an out-of-town experience, visit the Sagra dei Crotti in Chiavenna, celebrating local flavors and traditions." },
                    { title: "Between Rap and Tradition", description: "An itinerary that combines the modern culture of concerts by Sfera Ebbasta & Shiva with the tradition of the Eroico Rosso wine festival in Tirano." },
                    { title: "In the Fashion Spotlight", description: "Immerse yourself in the atmosphere of Milan Fashion Week Women's, exploring the streets of the fashion district and participating in public events, after registration." }
                ]
            }
        }
    }
};

let currentLang = 'it';
const pagesToBuild = Object.keys(appTexts.it.homepage.buttons);

function updateUI() {
    const langData = appTexts[currentLang];
    
    document.querySelector('h1').innerText = langData.homepage.title;
    document.getElementById('subtitle').innerText = langData.homepage.subtitle;

    const mainButtons = document.getElementById('main-buttons');
    mainButtons.innerHTML = '';
    
    for (const key in langData.homepage.buttons) {
        if (langData.homepage.buttons.hasOwnProperty(key)) {
            const buttonText = langData.homepage.buttons[key];
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('w-full', 'font-bold', 'py-5', 'rounded-lg', 'shadow-md', 'text-lg', 'btn');
            
            if (key.includes('itinerari')) {
                buttonElement.classList.add('btn-suggestion');
            } else if (key.includes('insolito') || key.includes('moda') || key.includes('vegani') || key.includes('bambini')) {
                buttonElement.classList.add('btn-vegan', 'mt-6');
            } else {
                buttonElement.classList.add('btn-category');
            }

            buttonElement.innerText = buttonText;
            buttonElement.setAttribute('onclick', `showPage('${key}')`);
            mainButtons.appendChild(buttonElement);
        }
    }
    
    buildAllPages();
}

function buildPage(pageId) {
    const data = appTexts[currentLang].pages[pageId];
    const pageElement = document.getElementById('page-content');
    
    if (!data) {
        pageElement.innerHTML = `<div class="p-6 bg-white min-h-screen"><header class="flex items-center mb-6 pb-4 border-b"><button onclick="showPage('home')" style="color:var(--magenta);" class="font-bold text-3xl mr-4">&larr;</button><h2 class="text-2xl font-bold text-ottanio">Pagina non trovata</h2></header></div>`;
        return;
    }
    
    let mainContent;
    if (data.itineraries) {
        mainContent = data.itineraries.map(createItineraryCard).join('');
    } else if (data.activities) {
        mainContent = data.activities.map(createActivityCard).join('');
    } else {
        mainContent = `<div class="p-4 text-center">Nessun contenuto disponibile.</div>`;
    }
    
    const backButtonText = currentLang === 'it' ? "&larr;" : "&larr;";
    const content = `
        <div class="p-6 bg-white min-h-screen">
            <header class="flex items-center mb-6 pb-4 border-b">
                <button onclick="showPage('home')" style="color:var(--magenta);" class="font-bold text-3xl mr-4">${backButtonText}</button>
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
    const infoLabel = "Informazioni:";
    return `
        <div class="card bg-white border-l-4 border-l-[var(--magenta)] rounded-r-lg p-4 mb-4 shadow-sm">
            <div class="flex justify-between items-start">
                <h3 class="font-bold text-xl text-ottanio">${activity.name}</h3>
                <span class="text-sm font-semibold text-magenta bg-gray-100 px-2 py-1 rounded-full" style="color:var(--magenta); background-color: var(--light-magenta);">${activity.dates}</span>
            </div>
            <div class="bg-gray-50 p-3 rounded-md text-ottanio mt-3">
                <p><strong class="font-semibold">${infoLabel}</strong> ${activity.details}</p>
                ${activity.address ? `<p class="mt-2"><strong class="font-semibold">Indirizzo:</strong> ${activity.address}</p>` : ''}
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

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    if (pageId === 'home') {
        document.getElementById('home').classList.add('active');
    } else {
        document.getElementById('page-content').classList.add('active');
        buildPage(pageId);
    }
    window.scrollTo(0, 0);
}

function buildAllPages() {
    // Le pagine vengono costruite dinamicamente, non c'è bisogno di pre-generarle
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            currentLang = event.target.dataset.lang;
            updateUI();
            showPage('home');
        });
    });
});