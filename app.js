const logoHtml = `<img src="2emme_logo_monogram_green_RGB" class="w-12 h-12" alt="Logo 2EMME">`;

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
                        { name: "La Pobbia 1850", details: "Risotto giallo con Ossobuco in gremolada. Bib Gourmand Michelin. Un'istituzione storica per la cucina milanese autentica.", dates: "60-80€" },
                        { name: "Premiata Trattoria Arlati", details: "Ossobuco con riso al salto. Ambiente artistico e bohémien unico, con solidi classici a prezzi vantaggiosi.", dates: "45-60€" },
                        { name: "Antica Trattoria della Pesa", details: "Risotto alla milanese, Cotoletta. Storica trattoria milanese che offre un'esperienza tradizionale e affidabile.", dates: "55-90€" },
                        { name: "Trippa", details: "Piatti a base di quinto quarto, menù stagionale. Osteria moderna molto richiesta, apprezzata per la creatività e la qualità delle materie prime.", dates: "40-60€" }
                    ]
                },
                etnici: {
                    title: "Ristoranti Etnici",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Ichikawa", details: "Menù Omakase. Giapponese (Alta Cucina). Per veri intenditori.", dates: "120-150€+" },
                        { name: "Shiro Poporoya", details: "Chirashi. Giapponese (Tradizionale). Un'istituzione leggendaria.", dates: "35-50€" },
                        { name: "Pacifico", details: "Ceviche Puro, Cocktail al Pisco. Peruviana (Nikkei). Trendy, cucina innovativa.", dates: "70-90€" },
                        { name: "Serendib", details: "Menù Degustazione. Indiana / Sri Lankese. Bib Gourmand Michelin.", dates: "30-40€" },
                        { name: "Tara", details: "Tandoori Misto, Chicken Tikka Masala. Indiana. Affidabile e con ottime recensioni.", dates: "20-25€" },
                        { name: "Mezè", details: "Mezè da condividere, Pane Saj. Libanese. Concept autentico e moderno.", dates: "50-70€" },
                        { name: "Warsà", details: "Zighinì (piatto conviviale). Eritrea. Storico e mitico locale eritreo.", dates: "25-35€" }
                    ]
                },
                moda: {
                    title: "Ristoranti 'Alla Moda'",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Enrico Bartolini al Mudec", details: "Menù Degustazione. 3 Stelle Michelin. Il vertice assoluto della gastronomia milanese.", dates: "240€+" },
                        { name: "Cracco in Galleria", details: "Cucina d'Autore. 1 Stella Michelin. Location iconica e innovazione.", dates: "210€" },
                        { name: "Berton", details: "Cucina Moderna. 1 Stella Michelin. Eleganza minimalista e cucina tecnica.", dates: "180€" },
                        { name: "Autem*", details: "Cucina di Mercato (Carta Bianca). 1 Stella Michelin. Approccio moderno e dinamico.", dates: "95€+ (à la carte)" },
                        { name: "Stendhal Milano", details: "Bistrot Milanese / Classici Rivisitati. Hotspot della Fashion Week, atmosfera chic.", dates: "60-90€ (à la carte)" }
                    ]
                },
                pizzerie: {
                    title: "Pizzerie",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Assaje", details: "Pizza 'Assaje' (zucca e gamberi). Napoletana Tradizionale. Popolare e vivace.", dates: "12-18€" },
                        { name: "Dry Milano", details: "The Bengal Shrimp, 5 Formaggi. Gourmet & Cocktail Pairing. Icona di stile.", dates: "16-28€" },
                        { name: "Crosta", details: "Impasti di alta qualità. Contemporanea / Da Panificio. Gambero Rosso (Tre Spicchi).", dates: "15-25€" },
                        { name: "Giolina", details: "Topping di alta qualità. Napoletana Contemporanea. Ambiente di design.", dates: "14-20€" },
                        { name: "Lievità", details: "Leggerezza e digeribilità. Napoletana Gourmet. Ricerca sugli impasti.", dates: "13-19€" },
                        { name: "Gino Sorbillo", details: "Margherita. Classica Napoletana. Una vera istituzione.", dates: "10-15€" }
                    ]
                },
                vegani: {
                    title: "Vegani e Vegetariani",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Joia", details: "Alta cucina vegetariana. Unica stella Michelin vegetariana in Europa. Un'esperienza gastronomica indimenticabile guidata dallo chef Pietro Leemann.", dates: "100€+" },
                        { name: "Linfa", details: "Fine dining vegetale. Eleganza e creatività in ogni piatto. Un'atmosfera sofisticata perfetta per un'occasione speciale.", dates: "60-80€" },
                        { name: "Soulgreen", details: "Plant-based. Locale di design in zona Porta Nuova. Ideale per un pasto sano, gustoso e molto 'instagrammabile'.", dates: "25-40€" },
                        { name: "Flower Burger", details: "Burger vegani colorati e patatine speziate. Divertente, informale e incredibilmente saporito. Un concept unico che ha conquistato la città.", dates: "15-25€" }
                    ]
                },
                suggerimenti: {
                    title: "Itinerari Suggeriti",
                    itineraries: [
                        { title: "Un Giorno da Milanese DOC", description: "Un'immersione nella tradizione. Iniziate con un pranzo da La Pobbia 1850 per assaporare i classici in un contesto storico. Per cena, scegliete l'atmosfera artistica della Premiata Trattoria Arlati, dove la storia meneghina incontra la cultura." },
                        { title: "Giro del Mondo in 48 Ore", description: "Un weekend cosmopolita. Il primo giorno, dedicatevi all'Asia: un pranzo da Shiro Poporoya per un chirashi leggendario e una cena da Ichikawa per un'esperienza omakase indimenticabile. Il secondo giorno, esplorate altri continenti: un pranzo conviviale da Mezè per assaporare la cucina libanese e una cena vibrante da Pacifico per scoprire la fusione Nikkei." },
                        { title: "Serata Glamour", description: "Per una notte sotto i riflettori. La scelta d'elezione è una cena da Autem*, dove l'innovazione dello chef Natalini si sposa con un'eleganza moderna. In alternativa, per un'atmosfera da salotto buono nel cuore di Brera, Stendhal Milano è una garanzia." },
                        { title: "Il Pellegrinaggio della Pizza", description: "Un tour comparativo per veri appassionati. Iniziate con l'autenticità napoletana di Assaje per pranzo. Per cena, immergetevi nell'esperienza unica di pizza e cocktail da Dry Milano. Il giorno seguente, puntate all'eccellenza assoluta degli impasti con una visita da Crosta." }
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
                        { name: "La Pobbia 1850", details: "Yellow Risotto with Ossobuco in gremolada. Michelin Bib Gourmand. A historic institution for authentic Milanese cuisine.", dates: "60-80€" },
                        { name: "Premiata Trattoria Arlati", details: "Ossobuco with risotto al salto. Unique artistic and bohemian setting, with solid classics at good prices.", dates: "45-60€" },
                        { name: "Antica Trattoria della Pesa", details: "Risotto alla milanese, Cotoletta. Historic Milanese trattoria offering a reliable and traditional experience.", dates: "55-90€" },
                        { name: "Trippa", details: "Offal-based dishes, seasonal menu. A very popular modern osteria, appreciated for its creativity and quality ingredients.", dates: "40-60€" }
                    ]
                },
                etnici: {
                    title: "Ethnic Restaurants",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Ichikawa", details: "Omakase Menu. Japanese (Haute Cuisine). For true connoisseurs.", dates: "120-150€+" },
                        { name: "Shiro Poporoya", details: "Chirashi. Japanese (Traditional). A legendary institution.", dates: "35-50€" },
                        { name: "Pacifico", details: "Pure Ceviche, Pisco Cocktail. Peruvian (Nikkei). Trendy, innovative cuisine.", dates: "70-90€" },
                        { name: "Serendib", details: "Tasting Menu. Indian / Sri Lankan. Michelin Bib Gourmand.", dates: "30-40€" },
                        { name: "Tara", details: "Mixed Tandoori, Chicken Tikka Masala. Indian. Reliable with excellent reviews.", dates: "20-25€" },
                        { name: "Mezè", details: "Mezè to share, Saj Bread. Lebanese. Authentic and modern concept.", dates: "50-70€" },
                        { name: "Warsà", details: "Zighinì (communal dish). Eritrean. A historic and mythical Eritrean restaurant.", dates: "25-35€" }
                    ]
                },
                moda: {
                    title: "Trendy Restaurants",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Enrico Bartolini al Mudec", details: "Tasting Menu. 3 Michelin Stars. The absolute peak of Milanese gastronomy.", dates: "240€+" },
                        { name: "Cracco in Galleria", details: "Signature Cuisine. 1 Michelin Star. Iconic location and innovation.", dates: "210€" },
                        { name: "Berton", details: "Modern Cuisine. 1 Michelin Star. Minimalist elegance and technical cuisine.", dates: "180€" },
                        { name: "Autem*", details: "Market Cuisine (Carte Blanche). 1 Michelin Star. Modern and dynamic approach.", dates: "95€+ (à la carte)" },
                        { name: "Stendhal Milano", details: "Milanese Bistrot / Reimagined Classics. Fashion Week hotspot, chic atmosphere.", dates: "60-90€ (à la carte)" }
                    ]
                },
                pizzerie: {
                    title: "Pizzerias",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Assaje", details: "Pizza 'Assaje' (pumpkin and shrimp). Traditional Neapolitan. Popular and lively.", dates: "12-18€" },
                        { name: "Dry Milano", details: "The Bengal Shrimp, 5 Cheeses. Gourmet & Cocktail Pairing. A style icon.", dates: "16-28€" },
                        { name: "Crosta", details: "High-quality doughs. Contemporary / Bakery-style. Gambero Rosso (Tre Spicchi).", dates: "15-25€" },
                        { name: "Giolina", details: "High-quality toppings. Contemporary Neapolitan. Designer ambiance.", dates: "14-20€" },
                        { name: "Lievità", details: "Lightness and digestibility. Gourmet Neapolitan. Research on doughs.", dates: "13-19€" },
                        { name: "Gino Sorbillo", details: "Margherita. Classic Neapolitan. A true institution.", dates: "10-15€" }
                    ]
                },
                vegani: {
                    title: "Vegan & Vegetarian",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Joia", details: "Haute vegetarian cuisine. The only vegetarian Michelin star in Europe. An unforgettable gastronomic experience led by chef Pietro Leemann.", dates: "100€+" },
                        { name: "Linfa", details: "Plant-based fine dining. Elegance and creativity in every dish. A sophisticated atmosphere perfect for a special occasion.", dates: "60-80€" },
                        { name: "Soulgreen", details: "Plant-based. Designer venue in Porta Nuova. Ideal for a healthy, tasty, and very 'instagrammable' meal.", dates: "25-40€" },
                        { name: "Flower Burger", details: "Colorful vegan burgers and spiced fries. Fun, informal, and incredibly flavorful. A unique concept that has taken the city by storm.", dates: "15-25€" }
                    ]
                },
                suggerimenti: {
                    title: "Suggested Itineraries",
                    itineraries: [
                        { title: "A Day as a True Milanese", description: "An immersion in tradition. Start with a lunch at La Pobbia 1850 to savor the classics in a historic setting. For dinner, choose the artistic atmosphere of Premiata Trattoria Arlati, where Milanese history meets culture." },
                        { title: "World Tour in 48 Hours", description: "A cosmopolitan weekend. On day one, focus on Asia: a legendary chirashi lunch at Shiro Poporoya and an unforgettable omakase dinner at Ichikawa. On day two, explore other continents: a communal Lebanese lunch at Mezè and a vibrant dinner at Pacifico to discover Nikkei fusion." },
                        { title: "Glamorous Evening", description: "For a night in the spotlight. The top choice is a dinner at Autem*, where Chef Natalini's innovation meets modern elegance. Alternatively, for a chic lounge atmosphere in the heart of Brera, Stendhal Milano is a sure bet." },
                        { title: "The Pizza Pilgrimage", description: "A comparative tour for true enthusiasts. Start with the Neapolitan authenticity of Assaje for lunch. For dinner, dive into the unique experience of pizza and cocktails at Dry Milano. The next day, aim for the absolute excellence of doughs with a visit to Crosta." }
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
                        { name: "Tananai", details: "The popular singer-songwriter will perform at the SNAI San Siro Hippodrome. Tickets start from €49.00 for general admission and €59.00 for the 'PIT' standing area.", dates: "Sept 05, 2025, 9:00 PM.", address: "SNAI San Siro Hippodrome, Piazzale dello Sport, 16, Milan." },
                        { name: "Salmo", details: "Rap concert at Fiera Milano Live. Tickets for Salmo start from €44.85.", dates: "Sept 06, 2025.", address: "Fiera Milano Concert Arena, Cargo 1 - Viale delle Ferrovie, Rho (Milan)." },
                        { name: "Emis Killa", details: "The Emis Killa concert is scheduled at Fiera Milano Live, one of the new venues for live music.", dates: "Sept 10, 2025.", address: "Fiera Milano Concert Arena, Cargo 1 - Viale delle Ferrovie, Rho (Milan)." },
                        { name: "Sfera Ebbasta & Shiva", details: "A single show with two big names in Italian rap at Fiera Milano Live, with tickets starting from €57.50.", dates: "Sept 13, 2025, 9:00 PM.", address: "Fiera Milano Live, Rho (Milan)." },
                        { name: "Ghali", details: "His 'Gran Teatro' show-event promises a unique spectacle at Fiera Milano Live, with tickets starting from €43.70.", dates: "Sept 20, 2025, 9:00 PM.", address: "Fiera Milano Concert Arena, Cargo 1 - Viale delle Ferrovie, Rho (Milan)." },
                        { name: "The Offspring", details: "The punk rock band will perform at the Unipol Forum.", dates: "Sept 29, 2025.", address: "Unipol Forum, Via G. di Vittorio, 6, Assago (MI)." },
                        { name: "Mito SettembreMusica", details: "A classical music festival held in various historic locations across the city. Most concerts have a cost and take place in historical venues.", dates: "Throughout the month of September.", address: "Various locations, such as Teatro Dal Verme or the Church of San Giovanni Battista alla Creta." }
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
                        { name: "Piazza Morbegno", details: "Considerata il cuore pulsante di NoLo, è un punto di ritrovo con locali e un'atmosfera da 'piccolo paese'.", dates: "Piazza Morbegno" },
                        { name: "Mercato Coperto Crespi", details: "Un tempo un semplice mercato, è stato riqualificato e ospita spesso mostre, concerti e aperitivi.", dates: "Viale Monza, 54" },
                        { name: "Cinema Beltrade", details: "Un cinema d'essai con una programmazione curata. Un luogo iconico per gli amanti del cinema indipendente.", dates: "Via Nino Oxilia, 10" },
                        { name: "Parco Trotter", details: "Un'oasi verde e storica, ideale per una passeggiata, jogging o semplicemente per rilassarsi.", dates: "Via Giacosa, 46" },
                        { name: "Naviglio Martesana", details: "Un bellissimo percorso pedonale e ciclabile che attraversa il quartiere, offrendo scorci pittoreschi e murales lungo il canale.", dates: "Naviglio Martesana" },
                        { name: "Eventi e Festival", details: "NoLo è noto per il suo dinamismo culturale. Tieni d'occhio eventi come il 'Festivalino' e il 'NoLo Fringe Festival'.", dates: "Variabili" },
                        { name: "Spazi culturali", details: "Scopri hub artistici come 'NoLo 91' che organizzano mostre, laboratori e incontri su tematiche contemporanee.", dates: "Variabili" }
                    ]
                },
                mangiare: {
                    title: "Dove mangiare e bere",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Ghe Pensi Mi", details: "Un must per l'aperitivo a NoLo, con birre artigianali, eventi serali e un'atmosfera molto amichevole.", dates: "Piazza Morbegno, 2" },
                        { name: "Nodo Bar", details: "Un nuovo spazio polifunzionale che unisce musica, gastronomia e cultura.", dates: "Via N. D'Apulia, 9" },
                        { name: "Salumeria del Design", details: "Un locale dall'atmosfera vintage per un aperitivo, con pop-up market, musica e degustazioni.", dates: "Via Cecilio Stazio, 18" },
                        { name: "Hug Milano", details: "Nato dalle ceneri di un'ex fabbrica di cioccolato, offre un'ottima miscelazione e piccoli piatti.", dates: "Via G. e C. Venini, 83" },
                        { name: "Buco del Monello", details: "Un wine bar accogliente per aperitivi e dopocena, con proposte di piatti semplici e genuini.", dates: "Via Pietro Crespi, 11" },
                        { name: "Nik's & Co", details: "Locale con un'atmosfera 'open-minded' e cocktail interessanti.", dates: "Via Giovanni Schiaparelli, 14" },
                        { name: "Da Abele", details: "Solido indirizzo noto per i suoi risotti fantasiosi e ben eseguiti.", dates: "Via Temperanza, 5" },
                        { name: "Le Nove Scodelle", details: "Ristorante cinese apprezzato.", dates: "Indirizzo non specificato" },
                        { name: "Mezzé Bistrot", details: "Permette di assaggiare diverse pietanze in porzioni ridotte.", dates: "Indirizzo non specificato" },
                        { name: "Mosso", details: "Pizzeria.", dates: "Indirizzo non specificato" },
                        { name: "El Dogo", details: "Ristorante argentino con un'atmosfera vivace.", dates: "Via Nicola D'Apulia, 4" },
                        { name: "Forno Nascosto di Tipografia Alimentare", details: "Ottimo per pane, focacce, brioche e dolci artigianali.", dates: "Via Dolomiti, 1" }
                    ]
                },
                arrivare: {
                    title: "Come arrivare a NoLo",
                    infoLabel: "Informazioni:",
                    activities: [
                        { name: "Metro", details: "La linea M1 (rossa) con fermate a Rovereto e Pasteur ti porta direttamente nel cuore di NoLo. La fermata Loreto (M1 e M2) è molto vicina al confine del quartiere.", dates: "M1 (Rossa)" },
                        { name: "Bus", details: "Diverse linee di autobus servono il quartiere, tra cui 62, 87, 90, 174, NM1, 56.", dates: "Varie linee" },
                        { name: "Treno e Tram", details: "Le linee S1, S6, S13, R28, RE4 hanno fermate nelle vicinanze. Anche la linea 1 del tram serve la zona.", dates: "Varie linee" }
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
                        { name: "Piazza Morbegno", details: "Considered the beating heart of NoLo, it's a meeting point with local pubs and a 'small-town' atmosphere.", dates: "Piazza Morbegno" },
                        { name: "Mercato Coperto Crespi", details: "Once a simple market, it has been redeveloped and often hosts exhibitions, concerts, and aperitivos.", dates: "Viale Monza, 54" },
                        { name: "Cinema Beltrade", details: "An art-house cinema with a curated program. An iconic place for independent film lovers.", dates: "Via Nino Oxilia, 10" },
                        { name: "Parco Trotter", details: "A historic green oasis, ideal for a walk, jogging, or simply relaxing.", dates: "Via Giacosa, 46" },
                        { name: "Naviglio Martesana", details: "A beautiful pedestrian and cycling path that runs through the neighborhood, offering picturesque views and murals along the canal.", dates: "Naviglio Martesana" },
                        { name: "Events and Festivals", details: "NoLo is known for its cultural dynamism. Keep an eye out for events like the 'Festivalino' and the 'NoLo Fringe Festival'.", dates: "Variable" },
                        { name: "Cultural Spaces", details: "Discover artistic hubs like 'NoLo 91' that organize exhibitions, workshops, and contemporary-themed meetings.", dates: "Variable" }
                    ]
                },
                mangiare: {
                    title: "Where to eat and drink",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Ghe Pensi Mi", details: "A must-visit for aperitivo in NoLo, with craft beers, evening events, and a very friendly atmosphere.", dates: "Piazza Morbegno, 2" },
                        { name: "Nodo Bar", details: "A new multi-purpose space that combines music, gastronomy, and culture.", dates: "Via N. D'Apulia, 9" },
                        { name: "Salumeria del Design", details: "A venue with a vintage atmosphere for an aperitivo, with pop-up markets, music, and tastings.", dates: "Via Cecilio Stazio, 18" },
                        { name: "Hug Milano", details: "Born from the ashes of a former chocolate factory, it offers excellent mixology and small dishes.", dates: "Via G. e C. Venini, 83" },
                        { name: "Buco del Monello", details: "A cozy wine bar for aperitifs and after-dinner drinks, with simple and genuine food proposals.", dates: "Via Pietro Crespi, 11" },
                        { name: "Nik's & Co", details: "A venue with an 'open-minded' atmosphere and interesting cocktails.", dates: "Via Giovanni Schiaparelli, 14" },
                        { name: "Da Abele", details: "A solid address known for its creative and well-executed risottos.", dates: "Via Temperanza, 5" },
                        { name: "Le Nove Scodelle", details: "A highly-rated Chinese restaurant.", dates: "Address not specified" },
                        { name: "Mezzé Bistrot", details: "Allows you to taste various dishes in reduced portions.", dates: "Address not specified" },
                        { name: "Mosso", details: "Pizzeria.", dates: "Address not specified" },
                        { name: "El Dogo", details: "An Argentinian restaurant with a lively atmosphere.", dates: "Via Nicola D'Apulia, 4" },
                        { name: "Forno Nascosto di Tipografia Alimentare", details: "Excellent for artisanal bread, focaccia, brioches, and pastries.", dates: "Via Dolomiti, 1" }
                    ]
                },
                arrivare: {
                    title: "How to get to NoLo",
                    infoLabel: "Info:",
                    activities: [
                        { name: "Metro", details: "The M1 (red) line with stops at Rovereto and Pasteur takes you directly to the heart of NoLo. The Loreto (M1 and M2) stop is also very close to the neighborhood's border.", dates: "M1 (Red)" },
                        { name: "Bus", details: "Several bus lines serve the neighborhood, including 62, 87, 90, 174, NM1, 56.", dates: "Various lines" },
                        { name: "Train and Tram", details: "The S1, S6, S13, R28, RE4 lines have nearby stops. Tram line 1 also serves the area.", dates: "Various lines" }
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
    currentGuide = null;
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
    
    document.getElementById('logo-container').innerHTML = logoHtml;
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
                <div class="flex items-center gap-4">
                    <div id="logo-container-guide">${logoHtml}</div>
                    <h2 class="text-2xl font-bold text-ottanio">${guideData.homepage.title}</h2>
                </div>
            </header>
            <main class="space-y-4">`;
    
    for (const key in guideData.homepage.buttons) {
        if (guideData.homepage.buttons.hasOwnProperty(key)) {
            const buttonText = guideData.homepage.buttons[key];
            
            let buttonClass = 'btn-category';
            if (key.includes('itinerari') || key.includes('suggerimenti')) {
                buttonClass = 'btn-suggestion';
            } else if (key.includes('vegani') || key.includes('insolito')) {
                buttonClass = 'btn-vegan';
            }

            content += `<button onclick="showPage('${key}')" class="w-full btn font-bold py-5 rounded-lg shadow-md text-lg ${buttonClass}">${buttonText}</button>`;
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
