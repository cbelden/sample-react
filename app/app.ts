import { states } from './state/index';
import { redButtonClick, blueButtonClick, clearClick } from './actions/index';

// Listen to all store updates and render
states.subscribe(render);

function render(state) {
    console.log('Rendering, ', state);
}

// Action handling
const redButton = document.getElementById('red-button');
redButton.onclick = redButtonClick;

const blueButton = document.getElementById('blue-button');
blueButton.onclick = blueButtonClick;

const clearButton = document.getElementById('clear-button');
clearButton.onclick = clearClick;
