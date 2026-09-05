//Arrays for password character storage 
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



//Assignment of all HTML components to their respective variables 
const passwordDisplay = document.querySelector("#passwordDisplay");
const copyButton = document.querySelector("#copyButton");
const passwordLenghtSelector = document.querySelector("#passwordLenghtSelector");
const passwordLenghtDisplay = document.querySelector("#passwordLenghtDisplay");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const memorablePasswordCheckbox = document.querySelector("#memorablePasswordCheckbox");
const regenerateButton = document.querySelector('#regenerateButton');

// random number generation
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Normal password generator logic
function generateNormalPassword() {
    let password = "";
    let masterArray = [];

    if (uppercaseCheckbox.checked == true){
        masterArray.push(uppercaseLetters)
    };
    if (lowercaseCheckbox.checked == true){
        masterArray.push(lowercaseLetters)
    };
    if (numbersCheckbox.checked == true){
        masterArray.push(numbers)
    };
    if (symbolsCheckbox.checked == true){
        masterArray.push(symbols)
    };

    for (let i = 0 ; i < passwordLenghtSelector.value ; i++){
        let arraySelector = getRandomInt(0, masterArray.length - 1);
        let subArraySelector = getRandomInt(0,masterArray[arraySelector].length - 1);
        password +=  masterArray[arraySelector][subArraySelector];
    }

    passwordDisplay.textContent = password;

}


//Memorable password generator logic 
function generateMemorablePassword(){
    let password = {
        adjective : '',
        noun : '',
        number :  '',
        symbol :  ''
    }

    password.adjective = passwordWords[getRandomInt(0, 578)];
    password.noun = passwordWords[getRandomInt(0, 578)];
    password.number = numbers[getRandomInt(0, 9)];
    password.symbol = symbols[getRandomInt(0, 30)];

      passwordDisplay.textContent = password.adjective+password.noun+password.number+password.symbol

}

//checkbox selection check
function checkSelection(){
    let count = 0;

    if (uppercaseCheckbox.checked == true ){
        count++
    };
    if (lowercaseCheckbox.checked == true ){
        count++
    }
    if (numbersCheckbox.checked == true ){
        count++
    }
    if (symbolsCheckbox.checked == true ){
        count++
    }

    return count;

}


//Set Default component Behaviour
uppercaseCheckbox.checked = true;
lowercaseCheckbox.checked = true;
numbersCheckbox.checked = true;
symbolsCheckbox.checked = true;
memorablePasswordCheckbox.checked = false;
regenerateButton.disabled = true;
passwordLenghtSelector.value = 14 ;
passwordLenghtDisplay.textContent = 14;
generateNormalPassword();

//copy password function
function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text successfully copied to clipboard');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}


//event listeners 
uppercaseCheckbox.addEventListener('change',() => {
    if(uppercaseCheckbox.checked == true){
         generateNormalPassword();
    }
    else
    {
        if(checkSelection() == 0){
            uppercaseCheckbox.checked = true;
            generateNormalPassword();
        }
        else
        generateNormalPassword();
    }
});
lowercaseCheckbox.addEventListener('change',() => {
    if(lowercaseCheckbox.checked == true){
         generateNormalPassword();
    }
    else
    {
        if(checkSelection() == 0){
            lowercaseCheckbox.checked = true;
            generateNormalPassword();
        }
        else
        generateNormalPassword();
    }
});
numbersCheckbox.addEventListener('change',() => {
    if(numbersCheckbox.checked == true){
         generateNormalPassword();
    }
    else
    {
        if(checkSelection() == 0){
            numbersCheckbox.checked = true;
            generateNormalPassword();
        }
        else
        generateNormalPassword();
    }
});;
symbolsCheckbox.addEventListener('change',() => {
    if(symbolsCheckbox.checked == true){
         generateNormalPassword();
    }
    else
    {
        if(checkSelection() == 0){
            symbolsCheckbox.checked = true;
            generateNormalPassword();
        }
        else
        generateNormalPassword();
    }
});
memorablePasswordCheckbox.addEventListener('change',() => {
    if (memorablePasswordCheckbox.checked == true){
        generateMemorablePassword();
        uppercaseCheckbox.checked = false;
        lowercaseCheckbox.checked = false;
        numbersCheckbox.checked = false;
        symbolsCheckbox.checked = false;
        passwordLenghtSelector.disabled = true;
        uppercaseCheckbox.disabled = true;
        lowercaseCheckbox.disabled = true;
        numbersCheckbox.disabled = true;
        symbolsCheckbox.disabled = true;
        regenerateButton.disabled = false;
    }
    else
    {
        uppercaseCheckbox.checked = true;
        lowercaseCheckbox.checked = true;
        numbersCheckbox.checked = true;
        symbolsCheckbox.checked = true;
        passwordLenghtSelector.disabled = false;
        uppercaseCheckbox.disabled = false;
        lowercaseCheckbox.disabled = false;
        numbersCheckbox.disabled = false;
        symbolsCheckbox.disabled = false;
        regenerateButton.disabled = true;
        generateNormalPassword();
    }
});
passwordLenghtSelector.addEventListener('input',() => {
    generateNormalPassword();
    passwordLenghtDisplay.textContent = passwordLenghtSelector.value
});
regenerateButton.addEventListener('click',() => {
    generateMemorablePassword();
})
copyButton.addEventListener('click',() => {
    copyTextToClipboard(passwordDisplay.textContent)
});
