const passwordWords = [
    // Animals
    "Tiger","Lion","Wolf","Fox","Bear","Panther","Leopard","Jaguar","Cheetah","Falcon",
    "Eagle","Hawk","Owl","Raven","Crow","Shark","Whale","Dolphin","Octopus","Kraken",
    "Dragon","Phoenix","Griffin","Hydra","Cobra","Viper","Python","Scorpion","Rhino","Bison",
    "Buffalo","Moose","Stag","Otter","Badger","Wolverine","Lynx","Puma","Koala","Penguin",

    // Nature
    "Storm","Thunder","Lightning","Rain","Snow","Blizzard","Hurricane","Tornado","Cyclone","Breeze",
    "River","Ocean","Lake","Waterfall","Mountain","Hill","Valley","Forest","Jungle","Canyon",
    "Volcano","Glacier","Desert","Savanna","Tundra","Island","Reef","Coral","Pebble","Stone",
    "Crystal","Ember","Flame","Ash","Smoke","Cloud","Mist","Shadow","Sunrise","Sunset",

    // Space
    "Galaxy","Nebula","Nova","Comet","Meteor","Asteroid","Orbit","Cosmos","Stellar","Lunar",
    "Solar","Eclipse","Rocket","Apollo","Saturn","Jupiter","Mars","Venus","Mercury","Pluto",
    "Quasar","Pulsar","Gravity","Photon","Cosmic","Celestial","Star","Moon","Planet","Aurora",

    // Mythology & History
    "Zeus","Athena","Apollo","Hermes","Hades","Poseidon","Ares","Artemis","Odin","Thor",
    "Loki","Freya","Achilles","Odysseus","Leonidas","Spartan","Titan","Atlas","Pegasus","Cerberus",
    "Minotaur","Cyclops","Medusa","Helios","Perseus","Hercules","Anubis","Ra","Osiris","Valkyrie",

    // Technology
    "Binary","Cipher","Matrix","Quantum","Pixel","Vector","Kernel","Server","Router","Logic",
    "Script","Python","Java","Ruby","Cloud","Crypto","Cache","Database","Network","Protocol",
    "Linux","Windows","Compiler","Git","Terminal","Docker","Code","Syntax","Runtime","Algorithm",

    // Objects
    "Hammer","Shield","Sword","Arrow","Bow","Spear","Axe","Dagger","Helmet","Armor",
    "Lantern","Compass","Anchor","Wheel","Engine","Rocket","Beacon","Mirror","Torch","Key",
    "Lock","Chain","Bridge","Castle","Tower","Crown","Coin","Clock","Book","Scroll",

    // Adjectives
    "Brave","Silent","Swift","Rapid","Fearless","Hidden","Golden","Silver","Crimson","Emerald",
    "Ancient","Royal","Wild","Electric","Frozen","Burning","Epic","Stealth","Bold","Lucky",
    "Mighty","Sharp","Clever","Wise","Noble","Dark","Bright","Iron","Steel","Scarlet",

    // Cities & Places
    "Tokyo","Paris","London","Berlin","Sydney","Rome","Athens","Dubai","Oslo","Cairo",
    "Amazon","Everest","Sahara","Arctic","Pacific","Atlantic","Andes","Alps","Olympus","Atlantis",
    "Babylon","Sparta","Troy","Avalon","Camelot","Eden","Utopia","Nexus","Horizon","Frontier",

    // Gems & Materials
    "Diamond","Ruby","Emerald","Sapphire","Topaz","Opal","Quartz","Obsidian","Granite","Marble",
    "Titanium","Carbon","Steel","Bronze","Silver","Gold","Platinum","Copper","Iron","Nickel",

    // Weather & Elements
    "Frost","Inferno","Tempest","Monsoon","Hail","Drizzle","Gale","Thunderbolt","Spark","Volt",
    "Blaze","Tsunami","Earthquake","Wildfire","Avalanche","Dust","Steam","Wave","Current","Whirlpool"
];


const uppercaseLetters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const lowercaseLetters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
];


const numbers = [
    "0","1","2","3","4","5","6","7","8","9"
];


const symbols = [
    "!","@","#","$","%","^","&","*","(",")",
    "-","_","=","+","[","]","{","}","|",
    ";",":","'",'"',",",".","<",">","/","?","`","~"
];

const normalpassbtn = document.querySelector("#normalpassbtn");
const passwordDisplay = document.querySelector("#passwordDisplay");
const strongpasswordbtn = document.querySelector("#strongpasswordbtn");
const copybtn = document.querySelector("#copybtn");
const lenghtDisplay = document.querySelector("#lenghtDisplay");
const passwordLenghtSelector = document.querySelector("#passwordLenghtSelector")

lenghtDisplay.textContent = passwordLenghtSelector.value;

passwordLenghtSelector.addEventListener("input", () => {
lenghtDisplay.textContent = passwordLenghtSelector.value;
});

copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.textContent);
    alert("Password Copied !")
});

function createnormalpassword(){
let passwordLenght = passwordLenghtSelector.value;
}

function createstrongpassword(){
let passwordLenght = passwordLenghtSelector.value;
let password = "";

for (let i = 0 ; i < passwordLenght ; i++)
{
let randomarray = Math.floor(Math.random() * ( 3 - 0 + 1)) + 0 ;
if (randomarray == 0) {
 let randomNumber = Math.floor(Math.random() * ( 25 - 0 + 1)) + 0 ;
 password = password + uppercaseLetters[randomNumber];
}
else
if (randomarray == 1) {
 let randomNumber = Math.floor(Math.random() * ( 25 - 0 + 1)) + 0 ;
 password = password + lowercaseLetters[randomNumber];
}
else
if (randomarray == 2) {
 let randomNumber = Math.floor(Math.random() * ( 9 - 0 + 1)) + 0 ;
 password = password + numbers[randomNumber];
}
else
if (randomarray == 3) {
 let randomNumber = Math.floor(Math.random() * ( 30 - 0 + 1)) + 0 ;
 password = password + symbols[randomNumber];
}
}

return password;

};

normalpassbtn.addEventListener("click", () => {
passwordDisplay.textContent = createnormalpassword();
});

strongpasswordbtn.addEventListener("click", () => {
passwordDisplay.textContent = createstrongpassword();
});



