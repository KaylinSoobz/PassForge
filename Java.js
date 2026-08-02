const passwordWords = [
    "Eagle","Fox","Moose","Rhino","Leopard","Cheetah","Badger","Wolverine","Puma","Koala",
    "Octopus","Kraken","Griffin","Hydra","Viper","Python","Scorpion","Buffalo","Stag","Hawk",
    "Owl","Crow","Pelican","Swan","Robin","Finch","Heron","Goose","Seal","Walrus",
    "Savanna","Tundra","Waterfall","Jungle","Reef","Pebble","Mist","Smoke","Ash","Breeze",
    "Cyclone","Tornado","Blizzard","Snow","Rain","Wave","Current","Whirlpool","Steam","Dust",
    "Inferno","Tempest","Monsoon","Hail","Drizzle","Gale","Spark","Volt","Wildfire","Avalanche",
    "Nebula","Asteroid","Cosmos","Lunar","Solar","Orbit","Quasar","Pulsar","Celestial","Cosmic",
    "Pluto","Apollo","Stellar","Gravity","Planet","Moon","Star","Cosmic","Meteorite","Observatory",
    "Zeus","Athena","Hermes","Hades","Poseidon","Ares","Artemis","Odin","Thor","Loki",
    "Freya","Achilles","Odysseus","Leonidas","Spartan","Titan","Atlas","Cerberus","Minotaur","Cyclops",
    "Medusa","Helios","Perseus","Hercules","Anubis","Osiris","Ra","Valkyrie","Camelot","Babylon",
    "Kernel","Server","Router","Cache","Linux","Windows","Compiler","Git","Code","Algorithm",
    "Boolean","Array","Object","Function","Variable","Pointer","Socket","Thread","Process","Package",
    "Module","Console","Browser","Engine","Framework","Library","Virtual","Machine","Backend","Frontend",
    "Helmet","Armor","Axe","Dagger","Wheel","Engine","Coin","Book","Locksmith","Backpack",
    "Notebook","Wallet","Bottle","Keyboard","Monitor","Camera","Pillow","Blanket","Museum","Village",
    "Canyon","Laptop","Falcon","Honey","Anchor","Meteor","Lantern","Coffee","Tiger","Quartz",
    "Violin","Pepper","Avalanche","Compass","Jungle","Knight","Blueprint","Cherry","Otter","Photon",
    "Castle","River","Dragon","Sapphire","Hammer","Vanilla","Galaxy","Shield","Forest","Atom",
    "Pasta","Volcano","Cobra","Notebook","Rocket","Crystal","Storm","Mango","Python","Bridge",
    "Emerald","Glacier","Camera","Phoenix","Basil","Saturn","Baker","Tornado","Wolf","Library",
    "Coral","Neptune","Guitar","Arrow","Pineapple","Matrix","Mountain","Diamond","Telescope","Penguin",
    "Harbor","Lightning","Cookie","Viking","Safari","Engine","Whale","Topaz","Coconut","Temple",
    "Scorpion","Canvas","Mercury","Explorer","Marble","Backpack","Moose","Aurora","Submarine","Cinnamon",
    "Jupiter","Falconer","Bread","Iron","Parrot","Voyager","Lantern","Obsidian","Sailor","Pebble",
    "Thunder","Lighthouse","Ruby","Dolphin","Castlewall","Kiwi","Compiler","Bison","Garden","Torch",
    "Star","Cheetah","Bronze","Cactus","Robot","Island","Compass","Blueberry","Captain","Jetstream",
    "Hydra","Cloud","Pixel","Olive","Scroll","Arctic","Ranger","Firefly","Silver","Trident",
    "Docker","Lemon","Fox","Breeze","Gold","Astronaut","Canary","Beacon","Cliff","Spear",
    "Moonlight","Circuit","Knightfall","Maple","Eagle","Vault","Orbit","Waterfall","Chef","Butterfly",
    "Walnut","Falcon","Lantern","Cucumber","Mercury","Backpack","Otter","Cobalt","Bicycle","Peppermint",
    "Harpoon","Galaxy","Robin","Cinnamon","Voyage","Anchor","Quartz","Pumpkin","Notebook","Leopard",
    "Tulip","Whirlpool","Captain","Avocado","Glacier","Helmet","Raccoon","Volcano","Blueprint","Tornado",
    "Mushroom","Compass","Daisy","Rocket","Hammer","Papaya","Sculpture","Lightning","Coyote","Library",
    "Chocolate","Saturn","Pebble","Telescope","Maple","Explorer","Cardinal","Waterfall","Pyramid","Olive",
    "Badger","Sandwich","Jasmine","River","Algorithm","Piano","Buffalo","Castle","Pepper","Emerald",
    "Dragonfly","Notebook","Falconer","Comet","Grapefruit","Obsidian","Bridge","Coffee","Horizon","Marble",
    "Skylight","Blueberry","Penguin","Harbor","Lantern","Ruby","Fox","Caravan","Topaz","Astronaut",
    "Coconut","Compass","Wildflower","Sword","Meteor","Guitar","Sunflower","Wolf","Coral","Basil",
    "Library","Shark","Pinecone","Sapphire","Engine","Palm","Canary","Thunder","Violin","Starlight",
    "Kiwi","Crystal","Lighthouse","Forest","Violet","Snowflake","Camel","Copper","Circuit","Cherry",
    "Whale","Diamond","Pasta","Photon","Bamboo","Mountain","Cedar","Anchor","Robot","Hawk",
    "Avalon","Turtle","Fireplace","Clover","Traveler","Orchid","Spear","Nebula","Moose","Mirror",
    "Honey","Atlas","Fountain","Canyon","Ranger","Vanilla","Eagle","Bronze","Garden","Voyager",
    "Swan","Engine","Acorn","Turquoise","Panorama","Heron","Vanilla","Citadel","Lobster","Horizon",
    "Barley","Tundra","Lanternfish","Caramel","Vortex","Anvil","Toucan","Velvet","Jigsaw","Harvester",
    "Falconry","Sundial","Waffle","Badlands","Titan","Pecan","Mosaic","Barracuda","Crater","Festival",
    "Walrus","Blueprint","Peppermill","Tamarin","Lagoon","Ivory","Workshop","Monarch","Raspberry","Summit",
    "Courier","Windmill","Harvester","Meteorite","Treasure","Dandelion","Chimney","Lighthouse","Firewood","Seagull",
    "Snowstorm","Blacksmith","Sailboat","Walnut","Pavilion","Pebbles","Macaw","Starfish","Crescent","Truffle",
    "Cavern","Steam","Oak","Voyager","Firework","Gladiator","Meadow","Porcelain","Dragonfruit","Blueprints",
    "Evergreen","Canal","Badminton","Village","Parachute","Marmot","Cliffside","Toffee","Hedgehog","Crossbow",
    "Observatory","Chestnut","Gondola","Skyscraper","Alligator","Prism","Constellation","Buttercup","Artisan","Meerkat",
    "Monsoon","Chameleon","Firestone","Parmesan","Boulder","Squirrel","Riptide","Hummingbird","Meadowlark","Windbreaker",
    "Crescendo","Fjord","Dragonfly","Moonstone","Waterwheel","Sundrop","Camel","Whisper","Beacon","Sandstone",
    "Penguin","Fireplace","Elm","Moonbeam","Snowdrift","Antler","Willow","Treeline","Woodland","Cottage",
    "Raindrop","Canteen","Macadamia","Wildcat","Tractor","Hourglass","Dune","Ravenwood","Pinecone","Orbit",
    "Honeycomb","Stonework","Everglade","Campfire","Caribou","Snowfall","Marigold","Workbench","Caterpillar","Northwind"
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
let password = "";

while (password.length < passwordLenght) {
    let randomNumber = Math.floor(Math.random() * passwordWords.length) ;
    if ( (password + passwordWords[randomNumber]).length <= passwordLenght ){
        password = password + passwordWords[randomNumber];
    } 
    else 
    {
    let randomNumber = Math.floor(Math.random()*(1 - 0 + 1)) + 0 ;
    if (randomNumber == 0 ){
        password = password + (numbers[Math.floor(Math.random() * ( 9 - 0 + 1)) + 0])
    }
    else
    password = password + (symbols[Math.floor(Math.random() * ( 30 - 0 + 1)) + 0])
    }
}
return password 
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



