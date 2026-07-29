const normalpassbtn = document.querySelector("#normalpassbtn");
const passwordDisplay = document.querySelector("#passwordDisplay");
const strongpasswordbtn = document.querySelector("#strongpasswordbtn");
const arrayCities = ["UnitedStates","Canada","Mexico","France","Italy","Japan","India","Brazil","Russia","SouthAfrica"];

const arrayarticle = ["","A","The"];
const arraycolors = ["Blue","Green","Yellow","Black","Purple"];
const arrayobjects = ["Car","House","Dog","Snail","Bag"];
const arraynumbers = [0,1,2,3,4,5,6,7,8,9];
const arraysymbols = ["!","@","#","$","%","^"]

function createnormalpassword() {
    let symbols = "!".repeat(Math.floor(Math.random() * 2) + 1);
    let number = String(Math.floor(Math.random() * (9 - 0 + 1)) + 0) + String(Math.floor(Math.random() * (9 - 0 + 1)) + 0) + String(Math.floor(Math.random() * (9 - 0 + 1)) + 0) + String(Math.floor(Math.random() * (9 - 0 + 1)) + 0);
    return  (arrayCities[Math.floor(Math.random() * (9 - 0 + 1)) + 0] + number + symbols) ;
};

normalpassbtn.addEventListener("click", () => {
passwordDisplay.textContent = createnormalpassword();
});

function createstrongpassword() {
    return (arrayarticle[(Math.floor(Math.random() * (2 - 0 + 1)) + 0)] + arraycolors[(Math.floor(Math.random() * (4 - 0 + 1)) + 0)] + arrayobjects[(Math.floor(Math.random() * (4 - 0 + 1)) + 0)] + arraynumbers[(Math.floor(Math.random() * (9 - 0 + 1)) + 0)] + arraysymbols[Math.floor(Math.random() * arraysymbols.length)]);
};

strongpasswordbtn.addEventListener("click", () => {
passwordDisplay.textContent = createstrongpassword();
});