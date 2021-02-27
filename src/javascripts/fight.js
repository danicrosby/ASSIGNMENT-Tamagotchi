import renderToDom from './helpers/renderToDom';

let strength = 100;

const updateStrengthScore = () => {
  document.querySelector('#strength-value').innerHTML = `${strength}`;
};

const runAway = (e) => {
  e.preventDefault();
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  updateStrengthScore();
};

const ensueViolence = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength <= 0) {
    strength = 100;
  }
  updateStrengthScore();
};

const fightCard = () => {
  let domString = '';
  domString += `
    <div id="fight-name"><h3>Name: FIGHT</h3></div>
    <div id="strength-score">Strength Score: <b><span id="strength-value">${strength}</span></div>
    <div id="fight-btn-container">
      <button type="button" class="btn btn-light" id="run-btn">Run!</button>
      <button type="button" class="btn btn-dark" id="fight-btn">Fight!</button>
    </div>`;

  renderToDom('#fight', domString);
  document.querySelector('#run-btn').addEventListener('click', runAway);
  document.querySelector('#fight-btn').addEventListener('click', ensueViolence);
};

export default fightCard;
