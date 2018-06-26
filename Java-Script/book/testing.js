var bodyParts = ["ухо", "жопа", "рыло", "харя", "срака", "грабли", "руки", "пузо"];
var randomBodyPart = bodyParts[Math.floor(Math.random() * 8)];
var randomAdjectives = ["вонючая", "тупая", "дурацкая", "упоротая", "стремная", "мохнатая"];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 6)];
var animalBodyParts = ["копыта", "хобот", "яйцеклад", "хвост", "клыки", "грива", "анус"];
var randomAnimalBodyPart = animalBodyParts[Math.floor(Math.random() * 7)];
var animals = ["ехидны","выдры","лисы","козы", "свиньи"];
var randomAnimal = animals[Math.floor(Math.random() * 5)];
var randomInsult = ["У тебя", randomBodyPart, "еще более", randomAdjective, ", чем", randomAnimalBodyPart, "у", randomAnimal].join(" ");
randomInsult;

let chisla = [3, 2, 1];
let itog = chisla.join ("bolshe chem");