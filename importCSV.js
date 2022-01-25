const { readFileSync } = require("fs");
const pType = require("./models/ptype");
const sType = require("./models/stype");
const Pokemons = require("./models/pokemon");

let data = readFileSync("./Pokemon.csv", "utf8").split("\n");
data.shift();

let // Primary Type
  arrayPri = [],
  schemPri = [],
  i = 0,
  // Secondary Type
  arraySec = [],
  schemSec = [],
  j = 0;
// Pokémans
(schemPok = []),
  // Fill pType and sType arrays
  data.forEach((line, idx) => {
    let l = line.split(",");
    /**
     * 0: PokeDex index number (id)
     * 1: Name of the Pokemon (name)
     * 2: Type of pokemon (pType)
     * 3: Other Type of Pokemon (sType)
     * Sum of Attack, Sp. Atk, Defense, Sp. Def, Speed and HP
     * Hit Points
     * Attack Strength
     * Defensive Strength
     * Special Attack Strength
     * Special Defensive Strength
     */

    // Return x amount of pokemons
    if (idx < 700) {
      if (arrayPri.indexOf(l[2]) == -1) {
        arrayPri.push(l[2]);
        // If pType is not present in array, add it

        let schema = {
          id: i,
          name: l[2],
        };
        // schema: { id: 0, name: "Grass" }

        schemPri.push(schema);
        i++; // Increment ID
      }

      if (arraySec.indexOf(l[3]) == -1 && l[3] != "") {
        arraySec.push(l[3]);
        let schema = {
          id: j,
          name: l[3],
        };
        schemSec.push(schema);
        j++;
      }

      // Pokémon schema
      let schema = {
        id: idx,
        name: l[1],
        ptypeid: arrayPri.indexOf(l[2]),
        stypeid: arraySec.indexOf(l[3]),
      };
      if (arraySec.indexOf(l[3]) == -1) schema.stypeid = null;

      schemPok.push(schema); // Add schema to pokemons array
    }
  });

try {
  pType.bulkCreate(schemPri).then(() => {
    console.log("Adicionado os tipos primário à base de dados.");
  });
  sType.bulkCreate(schemSec).then(() => {
    console.log("Adicionado os tipos secundário à base de dados.");
  });
  Pokemons.bulkCreate(schemPok).then(() => {
    console.log("Adicionado os pokemons à base de dados.");
  });
} catch (err) {
  console.log(err);
}
