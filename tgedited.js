// FUNCTION

function putWordOnPage() {
  console.log("Executing putWordOnPage()...")
  var randomWord = pickRandomWord();
  var randomX = getRandomX();
  var randomY = getRandomY();
  insertWordOnPage(randomWord, randomX, randomY);
}


$(document).ready(function() {
  setInterval(putWordOnPage,500);
});

var randomWordList = [
  "import",
  "dump",
  "factory",
  "cell phone",
  "brand",
  "eagle",
  "leadership",
  "cycle",
  "happen",
  "childish",
  "fair",
  "divide",
  "forecast",
  "college",
  "exaggerate",
  "graduate",
  "rhythm",
  "moment",
  "heart",
  "stunning",
]

function pickRandomWord(){
 return randomWordList[Math.floor(Math.random()*randomWordList.length)];
}

function getRandomX() {
  return Math.floor(Math.random()*1024);
  
}

function getRandomY() {
  return Math.floor(Math.random()*768);
 }

function overlayOn() {
  document.getElementById('overlay');
}




//THEMES

randomColorList = ['white'];

function pastelTheme() {
  return randomColorList = [
    "pink", 
    "lemonchiffon", 
    "lavender", 
    "blanchedalmond", 
    "powderblue" 
  ];
};


function natureTheme() {
  return randomColorList = [
    "aquamarine",
    "steelblue",
    "midnightblue",
    "mediumspringgreen",
    "darkgreen",
    "cornflowerblue"
  ];
};

function neonTheme() {
  return randomColorList = [
    "red",
    "yellow",
    "green",
    "blue"
  ];
};

function grayscaleTheme() {
  return randomColorList = [
    "white",
    "lightgray",
    "darkgray",
    "gray",
    "dimgray"
  ];
};

//
 function getRandomColor() {
  return randomColorList[Math.floor(Math.random()*randomColorList.length)];
 }

function insertWordOnPage(word, x, y){
    var h = document.createElement("H1");
    var t = document.createTextNode(word);
    h.appendChild(t);
    var containerDiv = document.getElementById("container");
    h.style.position = "absolute";
    h.style.top = x + "px";
    h.style.left = y + "px";
    h.style.backgroundColor = getRandomColor();
    document.body.style.backgroundColor = 'white';
    containerDiv.appendChild(h);
}

insertWordOnPage(pickRandomWord(),getRandomX(),getRandomY());

function pop() {
  getElementByTagName("h1")
}

$("#form_id").submit(function(e) {
    e.preventDefault();

    var text_input = document.getElementById('text_input');
    var input_value = text_input.value;
    var elem = findMatchingWord(input_value);
    if (elem !== -1) elem.remove();
    text_input.value="";
});


function findMatchingWord(text_input) {
    var nodesList = document.getElementById('container').childNodes;
    for (var i = 0; i < nodesList.length; i++) {
        var nodes = nodesList[i];
        console.log(nodes);
        if (nodes.innerHTML == text_input) {
            return nodes;
        }  
    }
    return -1;
}
