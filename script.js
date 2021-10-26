const Pet = prompt("Name your pet");
// document.write(Action);

let Energy = 0;
let Happiness = 0;
// document.write(Energy);
// document.write(Happiness);
for (i = 0; i < 6; i++) {
  var Action = prompt("feed, pet, or walk?");
  if (Action === "feed") {
    Energy = Energy + 2;
  } else if (Action === "pet") {
    Happiness = Happiness + 1;
  } else if (Action === "walk") {
    if (Energy === 0) {
      alert("Not enough energy for a walk. Try again later!");
    } else if (Energy > 0) {
      Happiness = Happiness + 2;
      Energy = Energy - 1;
    }
  }
}
console.log("Pet:", Pet);
console.log("Happiness:", Happiness);
console.log("Energy:", Energy);

console.log(`${Pet} has ${Happiness} happiness and ${Energy} energy`);
