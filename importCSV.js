const { readFileSync } = require("fs");

let data = readFileSync("./Pokemon.csv", "utf8").split("\n");
data.shift();

//0|nome|pType|Stype

let aP = [],
  i = -1,
  aS = [],
  j = -1;

data.forEach((line, idx) => {
  let l = line.split(",");

  // Return x amount of pokemons
  if (idx < 20) {
    const pokemon = {
      id: idx,
      name: l[1],
    };

    let pType = {};
    if (aP.indexOf(l[2]) == -1) {
      aP += l[2] + ", ";
      i++;

      pType = {
        id: i,
        name: l[2],
      };
    }

    let sType = {};
    if (aS.indexOf(l[3]) == -1) {
      aS += l[3] + ", ";
      j++;

      sType = {
        id: j,
        name: l[3],
      };
    }

    console.log(pokemon, pType, sType);
  }
});
