let items = ["topic 1", "topic 2", "topic 3", "topic 4", "topic 5", "topic 6"];
let randomItem = items;
let children = ["child-1", "child-2", "child-3", "child-4", "child-5", "child-6"];
let childclick = ["child-on-click-1", "child-on-click-2", "child-on-click-3", "child-on-click-4", "child-on-click-5", "child-on-click-6"];

function toggleDiv(divId1, divId2, index) {
    var div2 = document.getElementById(divId1);
    var div1 = document.getElementById(divId2);

    div2.textContent = randomItem[index - 1];

    div2.style.display = 'flex';
    div1.style.display = 'none';

}
function toggleDivBack(divId1, divId2) {
    var div2 = document.getElementById(divId1);
    var div1 = document.getElementById(divId2);
    div2.style.display = 'flex';
    div1.style.display = 'none';

}
function toggleBtn(divId1, divId2){
    var div2 = document.getElementById(divId1);
    var div1 = document.getElementById(divId2);

    div2.textContent = "Shuffled";

    div2.style.display = 'flex';
    div1.style.display = 'none';
}
function toggleBtnBack(divId1, divId2){
    var div2 = document.getElementById(divId1);
    var div1 = document.getElementById(divId2);
    div2.style.display = 'flex';
    div1.style.display = 'none';

}

function shuffle() {
    for (let j = 0; j < items.length; j++) {
        toggleDivBack(children[j], childclick[j]);
    }
    randomItem = [];
    let itemsCopy = [...items];

    for (let i = 0; i < items.length; i++) {
        let randomIndex = Math.floor(Math.random() * itemsCopy.length);
        randomItem.push(itemsCopy[randomIndex]);
        itemsCopy.splice(randomIndex, 1);
    }

}