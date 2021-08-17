const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    // Q1
    const firstQuestion = pokemon.filter(pok => pok.id %3 === 0);
    console.log(firstQuestion);
    console.log("--------------------");

    // Q2
    const secondQuestion = pokemon.filter(pok => pok.types[0] == "fire");
    console.log(secondQuestion);
    console.log("--------------------");

    // Q3
    const thirdQuestion = pokemon.filter(pok => pok.types.length > 1);
    console.log(thirdQuestion);
    console.log("--------------------");

    // Q4
    const fourthQuestion = pokemon.map(pok => pok.name);
    console.log(fourthQuestion);
    console.log("--------------------");

    // Q5
    const fifthQuestion = pokemon.filter(pok => pok.id > 99).map(pok => pok.name);
    console.log(fifthQuestion);
    console.log("--------------------");

    // Q6 
    const sixthQuestion = pokemon.filter(pok => pok.types[0] == "poison" || pok.types[1] == "poison").map(pok => pok.name);
    console.log(sixthQuestion);
    console.log("--------------------");

    // Q7
    const seventhQuestion = pokemon.filter(pok => pok.types[1] == "flying").map(pok => pok.types[0]);
    console.log(seventhQuestion);
    console.log("--------------------");

    // Q8
    const eigththQuestion = pokemon.filter(pok => pok.types == "normal");
    console.log(eigththQuestion.length);
    

