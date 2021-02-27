import renderToDom from './helpers/renderToDom';

let energy = 50;
let sleep = 0;

const updateEnergyScore = () => {
  document.querySelector('#energy-value').innerHTML = `${energy}`;
};

const updateSleepScore = () => {
  document.querySelector('#sleep-value').innerHTML = `${sleep}`;
};

const nap = (e) => {
  e.preventDefault();
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  updateEnergyScore();
};

const deepSlumber = (e) => {
  e.preventDefault();
  sleep += 60;

  updateSleepScore();
};

const sleepCard = () => {
  let domString = '';
  domString += `

  <div id="sleep-name"><h2>SLEEP</h2></div>
  <div id="energy-score">Energy Score: <b><span id="energy-value">${energy}</span></b></div>
  <div id="sleep-score">Sleep Score: <b><span id="sleep-value">${sleep}</span></b></div>
  <div id="sleep-btn-container">
    <button type="button" class="btn btn-light" id="nap-btn">Nap</button>
    <button type="button" class="btn btn-dark" id="deep-slumber-btn">Deep Slumber</button>
  </div>`;

  renderToDom('#sleep', domString);
  document.querySelector('#nap-btn').addEventListener('click', nap);
  document.querySelector('#deep-slumber-btn').addEventListener('click', deepSlumber);
};

export default sleepCard;
