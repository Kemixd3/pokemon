// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBuWPU0zqYMOcDZqhBj6lYhJ1Clo8hoFfI",
  authDomain: "javascriptgame-4e4c9.firebaseapp.com",
  databaseURL: "https://javascriptgame-4e4c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "javascriptgame-4e4c9",
  storageBucket: "javascriptgame-4e4c9.appspot.com",
  messagingSenderId: "929889109178",
  appId: "1:929889109178:web:b4b41c9bf29de88d7c6e83",
  measurementId: "G-P40H8CJHRK"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Handle form submission
function addPokemon() {
  // Get form values
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ability = document.getElementById("ability").value;
  var image = document.getElementById("image").value;
  var footprint = document.getElementById("footprint").value;
  var dexindex = document.getElementById("dexindex").value;
  var type = document.getElementById("type").value;
  var subtype = document.getElementById("subtype").value;
  var weaknesses = document.getElementById("weaknesses").value;
  var gender = document.getElementById("gender").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var generation = document.getElementById("generation").value;
  var spilversion = document.getElementById("spilversion").value;
  var canEvolve = document.getElementById("canEvolve").checked;
  var statsHP = document.getElementById("statsHP").value;
  var statsAttack = document.getElementById("statsAttack").value;
  var statsDefence = document.getElementById("statsDefence").value;
  var statsSpecialAttack = document.getElementById("statsSpecialAttack").value;
  var statsSpecialDefence = document.getElementById("statsSpecialDefence").value;
  var statsSpeed = document.getElementById("statsSpeed").value;
  
  // Push pokemon data to the database
  database.ref('pokemon').push({
    name: name,
    description: description,
    ability: ability,
    image: image,
    footprint: footprint,
    dexindex: dexindex,
    type: type,
    subtype: subtype,
    weaknesses: weaknesses,
    gender: gender,
    weight: weight,
    height: height,
    generation: generation,
    spilversion: spilversion,
    canEvolve: canEvolve,
    statsHP: statsHP,
    statsAttack: statsAttack,
    statsDefence: statsDefence,
    statsSpecialAttack: statsSpecialAttack,
    statsSpecialDefence: statsSpecialDefence,
    statsSpeed: statsSpeed
  });
  
  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("ability").value = "";
  document.getElementById("image").value = "";
  document.getElementById("footprint").value = "";
  document.getElementById("dexindex").value = "";
  document.getElementById("type").value = "";
  document.getElementById("subtype").value = "";
  document.getElementById("weaknesses").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("generation").value = "";
  document.getElementById("spilversion").value = "";
  document.getElementById("canEvolve").checked = false;
  document.getElementById("statsHP").value = "";
  document.getElementById("statsAttack").value = "";
  document.getElementById("statsDefence").value = "";
  document.getElementById("statsSpecialAttack").value = "";
  document.getElementById("statsSpecialDefence").value = "";
  document.getElementById("statsSpeed").value = "";
}

  

const pokemonForm = document.getElementById('pokemon-form');

// Call toggleForm to minimize the form initially
toggleForm(pokemonForm);


function toggleForm() {
  const form = document.getElementById("pokemon-form");
  const minimizeButton = document.getElementById("minimize-form");
  if (form.style.display === "none") {
    form.style.display = "block";
    minimizeButton.innerHTML = "Minimize";
  } else {
    form.style.display = "none";
    minimizeButton.innerHTML = "Expand";
  }
}


function getJsonFromUrl(url) {
  const response = fetch(url);
  const data = response.json();
  return data;
}







const data = (["https://raw.githubusercontent.com/Jasper-Nielsen/pokemon-data/main/pokemon.JSON",
"https://raw.githubusercontent.com/MaryanQ/Data/main/squirtle.json",
"https://raw.githubusercontent.com/Kemixd3/pokemon/main/pokemon.json",
"https://zenkhalil.github.io/jsonapi/data.json", "https://raw.githubusercontent.com/Blue-Grizzly/Pokemon-data-app/main/objects.JSON","https://raw.githubusercontent.com/Hamse-LibaaxMose/Pokemon-data-projekt/main/Pokemon.json"
,"https://raw.githubusercontent.com/HAlbergson/pokemon-projekt-gliscor/main/data/gliscor.JSON?token=GHSAT0AAAAAAB6YGLHZBETOHIIZ25U26TXCZBAT6BQ","https://raw.githubusercontent.com/jackvwh/CRUD-app/master/json-data.json","https://raw.githubusercontent.com/Jasper-Nielsen/pokemon-data/main/pokemon.JSON",
"https://raw.githubusercontent.com/sassnoe/Data-pokemon-app/main/umbreon.json", "https://github.com/JonLundby/data-aflevering/blob/main/trevenant.json","https://raw.githubusercontent.com/LauritsSchou/pokemon-database/main/psyduck.json",
"https://raw.githubusercontent.com/LisePetculescu/pokemon-charmander/main/charmander.json", "https://raw.githubusercontent.com/Slumhunden/CRUD-HARRYPOTTER/main/gyarados.json", "https://github.com/magnutron/pokedexio/blob/main/blastoise.json",
"https://raw.githubusercontent.com/Jaes98/PokemonDataApp_Marcus/main/mewtwo.json", "https://raw.githubusercontent.com/MaryanQ/Data/main/squirtle.json", "https://raw.githubusercontent.com/OliKirk/Poke-Project-Object/main/data/pok%C3%A9mon.json?token=GHSAT0AAAAAAB6HFM3GYO32IIUDC3EB52NIZA4F3ZA", 
"https://raw.githubusercontent.com/PalleGregersJensen/Pokemon-projekt/main/data/wattrel.json", "https://raw.githubusercontent.com/sebbex1337/Pokemon-app/main/rayquaza.json",
"https://raw.githubusercontent.com/SS4nd/Pokemon/main/data.json", "https://raw.githubusercontent.com/sebbex1337/Pokemon-app/main/sunflora.json", "https://github.com/tora0001/pokemon-data/blob/main/data/pokemon.json",
"https://raw.githubusercontent.com/Adelkilde/Data-Pokemon/main/mew.json", "https://raw.githubusercontent.com/yousra-alt/pokemon.projekt.data-struktur./main/data/pokemon.json" ]);



function quickAddPokemon(data) {
  const pokemonRef = firebase.database().ref('pokemon');
  
  if (Array.isArray(data)) {
    // Handle array of URLs and/or JSON objects
    data.forEach(datum => quickAddPokemon(datum));
  } else {
    // Handle single URL or JSON object
    const newPokemonRef = pokemonRef.push();
  
    // Check if the data is a URL or a JSON object
    if (typeof data === 'string') {
      // Fetch the JSON data from the URL
      fetch(data)
        .then(response => response.json())
        .then(json => {

  pokemonRef.orderByChild("name").equalTo(json.name).once("value", snapshot => {
          if (snapshot.exists()) {
            console.log("A pokemon with this name already exists in the database.");
          } else {
            // Save the JSON data to the database
            const newPokemonRef = pokemonRef.push();
            newPokemonRef.set({
              name: json.name || null,
              description: json.description || null,
              ability: json.ability || null,
              image: json.image || null,
              footprint: json.footprint || null,
              dexindex: json.dexindex || null,
              type: json.type || null,
              subtype: json.subtype || null,
              weaknesses: json.weaknesses || null,
              gender: json.gender || null,
              weight: json.weight || null,
              height: json.height || null,
              generation: json.generation || null,
              spilversion: json.spilversion || null,
              canEvolve: json.canEvolve || null,
              statsHP: json.statsHP || null,
              statsAttack: json.statsAttack || null,
              statsDefence: json.statsDefence || null,
              statsSpecialAttack: json.statsSpecialAttack || null,
              statsSpecialDefence: json.statsSpecialDefence || null,
              statsSpeed: json.statsSpeed || null,
            });
            console.log("Pokemon added to the database.");
          }
        });
      })
    
      .catch(error => console.error(error));
    } else {
      // Save the JSON data to the database
      pokemonRef.orderByChild("name").equalTo(data.name).once("value", snapshot => {
        if (snapshot.exists()) {
          console.log("A pokemon with this name already exists in the database.");
        } else {
          // Save the JSON data to the database
          const newPokemonRef = pokemonRef.push();
          newPokemonRef.set({
            name: data.name || null,
            description: data.description || null,
            ability: data.ability || null,
            image: data.image || null,
            footprint: data.footprint || null,
            dexindex: data.dexindex || null,
            type: data.type || null,
            subtype: data.subtype || null,
            weaknesses: data.weaknesses || null,
            gender: data.gender || null,
            weight: data.weight || null,
            height: data.height || null,
            generation: data.generation || null,
            spilversion: data.spilversion || null,
            canEvolve: data.canEvolve || null,
            statsHP: data.statsHP || null,
            statsAttack: data.statsAttack || null,
            statsDefence: data.statsDefence || null,
            statsSpecialAttack: data.statsSpecialAttack || null,
            statsSpecialDefence: data.statsSpecialDefence || null,
            statsSpeed: data.statsSpeed || null,
          });
          console.log("Pokemon added to the database.");
        }
      });
  }
}
}



quickAddPokemon(data)


//quickAddPokemon();
const newPokemon = {
  name: "Diglett",
  description: "Diglett is a small, mole-like Pokémon. It spends much of its time underground, and has very thin skin, which makes it sensitive to sunlight. It has two small eyes and a round pink nose.",
  ability: "Sand Veil",
  image: "https://cdn.bulbagarden.net/upload/thumb/8/89/050Diglett.png/250px-050Diglett.png",
  footprint: "https://cdn.bulbagarden.net/upload/6/66/050MS8.png",
  dexindex: 50,
  type: "Ground",
  subtype: "N/A",
  weaknesses: ["Water", "Grass", "Ice"],
  gender: "50% male, 50% female",
  weight: "0.8 kg",
  height: "0.2 m",
  generation: 1,
  spilversion: "Pokémon Red, Green, Blue",
  canEvolve: true,
  statsHP: 5,
  statsAttack: 8,
  statsDefence: 10,
  statsSpecialAttack: 3,
  statsSpecialDefence: 6,
  statsSpeed: 10
};







// Update pokemon data
function updatePokemon(id, name, type, image, description, ability, footprint, dexindex, subtype, weaknesses, gender, weight, height, generation, spilversion, canEvolve, statsHP, statsAttack, statsDefence, statsSpecialAttack, statsSpecialDefence, statsSpeed) {
  database.ref('pokemon/' + id).update({
    name: name,
    type: type,
    image: image,
    description: description,
    ability: ability,
    footprint: footprint,
    dexindex: dexindex,
    subtype: subtype,
    weaknesses: weaknesses,
    gender: gender,
    weight: weight,
    height: height,
    generation: generation,
    spilversion: spilversion,
    canEvolve: canEvolve,
    statsHP: statsHP,
    statsAttack: statsAttack,
    statsDefence: statsDefence,
    statsSpecialAttack: statsSpecialAttack,
    statsSpecialDefence: statsSpecialDefence,
    statsSpeed: statsSpeed
  });
}


// Delete pokemon data
function deletePokemon(id) {
  database.ref('pokemon/' + id).remove();
}

// Display pokemon cards
// Display pokemon cards
var pokemonCards = document.getElementById("pokemon-cards");
database.ref('pokemon').on('child_added', function(data) {
  var pokemon = data.val();
  var card = document.createElement("div");
  card.className = "pokemon-card";
  card.innerHTML = "<h2>" + pokemon.name + "</h2>" +
  "<img src='" + pokemon.image + "'>" +
  "<button class='view-more-btn'>View More</button>";
  pokemonCards.appendChild(card);
  var dialog = document.createElement("dialog");
  dialog.innerHTML = "<p>Type: " + pokemon.type + "</p>" +
  "<p>Description: " + pokemon.description + "</p>" +
  "<p>Ability: " + pokemon.ability + "</p>" +
  "<p>Footprint: " + pokemon.footprint + "</p>" +
  "<p>Dex Index: " + pokemon.dexindex + "</p>" +
  "<p>Subtype: " + pokemon.subtype + "</p>" +
  "<p>Weaknesses: " + pokemon.weaknesses + "</p>" +
  "<p>Gender: " + pokemon.gender + "</p>" +
  "<p>Weight: " + pokemon.weight + "</p>" +
  "<p>Height: " + pokemon.height + "</p>" +
  "<p>Generation: " + pokemon.generation + "</p>" +
  "<p>Game Version: " + pokemon.spilversion + "</p>" +
  "<p>Can Evolve: " + pokemon.canEvolve + "</p>" +
  "<p>Stats - HP: " + pokemon.statsHP + ", Attack: " + pokemon.statsAttack + ", Defense: " + pokemon.statsDefence + ", Special Attack: " + pokemon.statsSpecialAttack + ", Special Defense: " + pokemon.statsSpecialDefence + ", Speed: " + pokemon.statsSpeed + "</p>" +
  "<button onclick='editPokemon(\"" + data.key + "\", \"" + pokemon.name + "\", \"" + pokemon.type + "\", \"" + pokemon.image + "\", \"" + pokemon.description + "\", \"" + pokemon.ability + "\", \"" + pokemon.footprint + "\", \"" + pokemon.dexindex + "\", \"" + pokemon.subtype + "\", \"" + pokemon.weaknesses + "\", \"" + pokemon.gender + "\", \"" + pokemon.weight + "\", \"" + pokemon.height + "\", \"" + pokemon.generation + "\", \"" + pokemon.spilversion + "\", \"" + pokemon.canEvolve + "\", \"" + pokemon.statsHP + "\", \"" + pokemon.statsAttack + "\", \"" + pokemon.statsDefence + "\", \"" + pokemon.statsSpecialAttack + "\", \"" + pokemon.statsSpecialDefence + "\", \"" + pokemon.statsSpeed + "\")'>Edit</button>" +
  "<button onclick='deletePokemon(\"" + data.key + "\")'>Delete</button>" + "<button class='close-dialog-btn'>Close</button>"; ;
  dialog.id = "dialog-" + data.key;
  card.appendChild(dialog);
  
  var viewMoreBtn = card.querySelector('.view-more-btn');
  viewMoreBtn.addEventListener('click', function() {
    var dialog = document.querySelector("#dialog-" + data.key);
    dialog.showModal();
  });
  var closeDialogBtn = dialog.querySelector(".close-dialog-btn");
  closeDialogBtn.addEventListener("click", function() {
    dialog.close();
  });
  
  
});


// Edit pokemon data
// Edit pokemon data
function editPokemon(id, name, type, image, description, ability, footprint, dexindex, subtype, weaknesses, gender, weight, height, generation, spilversion, canEvolve, statsHP, statsAttack, statsDefence, statsSpecialAttack, statsSpecialDefence, statsSpeed) {
  document.getElementById("name").value = name;
  document.getElementById("type").value = type;
  document.getElementById("image").value = image;
  document.getElementById("description").value = description;
  document.getElementById("ability").value = ability;
  document.getElementById("footprint").value = footprint;
  document.getElementById("dexindex").value = dexindex;
  document.getElementById("subtype").value = subtype;
  document.getElementById("weaknesses").value = weaknesses;
  document.getElementById("gender").value = gender;
  document.getElementById("weight").value = weight;
  document.getElementById("height").value = height;
  document.getElementById("generation").value = generation;
  document.getElementById("spilversion").value = spilversion;
  document.getElementById("canEvolve").checked = canEvolve;
  document.getElementById("statsHP").value = statsHP;
  document.getElementById("statsAttack").value = statsAttack;
  document.getElementById("statsDefence").value = statsDefence;
  document.getElementById("statsSpecialAttack").value = statsSpecialAttack;
  document.getElementById("statsSpecialDefence").value = statsSpecialDefence;
  document.getElementById("statsSpeed").value = statsSpeed;
  document.getElementById('pokemon-add').style.visibility = 'hidden';
  var updateButton = document.getElementById("update-pokemon-button");
  updateButton.style.display = "block";
  updateButton.onclick = function() {
    updatePokemon(id, document.getElementById("name").value, document.getElementById("type").value, document.getElementById("image").value, document.getElementById("description").value, document.getElementById("ability").value, document.getElementById("footprint").value, document.getElementById("dexindex").value, document.getElementById("subtype").value, document.getElementById("weaknesses").value, document.getElementById("gender").value, document.getElementById("weight").value, document.getElementById("height").value, document.getElementById("generation").value, document.getElementById("spilversion").value, document.getElementById("canEvolve").checked, document.getElementById("statsHP").value, document.getElementById("statsAttack").value, document.getElementById("statsDefence").value, document.getElementById("statsSpecialAttack").value, document.getElementById("statsSpecialDefence").value, document.getElementById("statsSpeed").value);
    
    document.getElementById("add-pokemon-button").innerHTML = "Add Pokemon";
    document.getElementById("add-pokemon-button").onclick = addPokemon;
    document.getElementById("pokemon-form").reset();
  };
}


