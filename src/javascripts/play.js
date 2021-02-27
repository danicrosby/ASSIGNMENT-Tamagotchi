import renderToDom from './helpers/renderToDom';

let fun = 50;

const updateFunScore = () => {
  document.querySelector('#fun-value').innerHTML = `${fun}`;
};

const superFunActivity = (e) => {
  e.preventDefault();
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  updateFunScore();
};

const slightlyFunActivity = (e) => {
  e.preventDefault();
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  updateFunScore();
};

const playCard = () => {
  let domString = '';
  domString += `
    <div id="play-name"><h3>Name: PLAY</h3></div>
    <div id="fun-score">Fun Score: <b><span id="fun-value">${fun}</span></div>
    <div id="play-btn-container">
      <button type="button" class="btn btn-light" id="super-fun-btn">Super Fun!</button>
      <button type="button" class="btn btn-dark" id="slightly-fun-btn">Slightly Fun</button>
    </div>`;

  renderToDom('#play', domString);
  document.querySelector('#super-fun-btn').addEventListener('click', superFunActivity);
  document.querySelector('#slightly-fun-btn').addEventListener('click', slightlyFunActivity);
};

export default playCard;
