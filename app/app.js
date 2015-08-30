var index_1 = require('./state/index');
var index_2 = require('./actions/index');
index_1.states.subscribe(render);
function render(state) {
    console.log('Rendering, ', state);
}
var redButton = document.getElementById('red-button');
redButton.onclick = index_2.redButtonClick;
var blueButton = document.getElementById('blue-button');
blueButton.onclick = index_2.blueButtonClick;
var clearButton = document.getElementById('clear-button');
clearButton.onclick = index_2.clearClick;
