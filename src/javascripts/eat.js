import renderToDom from './helpers/renderToDom';

let full = 100;

const feedHealthyFood = (e) => {
  e.preventDefault();
  full += 10;
  if (full > 100) {
    full = 100;
  }
};

const feedUnHealthyFood = (e) => {
  e.preventDefault();
  full -= 3;
  if (full <= 0) {
    full = 'death';
  }
};

const eatCard = () => {
  let domString = '';
  domString += `
    <div id="eat-name"><h3>Name: EAT</h3></div>
    <div id="fullness-score">Fullness Score: <b>${full}</b></div>
    <div id="eat-btn-container">
      <button type="button" class="btn btn-light" id="eat-healthy-btn">Healthy</button>
      <button type="button" class="btn btn-dark" id="eat-unhealthy-btn">Unhealthy</button>
    </div>`;

  renderToDom('#eat', domString);
  document.querySelector('#eat-healthy-btn').addEventListener('click', feedHealthyFood);
  document.querySelector('#eat-unhealthy-btn').addEventListener('click', feedUnHealthyFood);
};

export default eatCard;
