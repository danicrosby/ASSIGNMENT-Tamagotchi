import renderToDom from './helpers.js/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
    <div id="quad-container">

    <div id="left-row">
      <div id="eat" class="quad">EAT VAR FULL</div>
      <div id="fight" class="quad">FIGHT VAR STRENGTH</div>
    </div>

    <div id="btn-container">

    <div id="top">
      <button type="button" id="play-btn">PLAY</button>
    </div>

    <div id="bottom">
      <button type="button" id="eat-btn"> EAT </button>
      <button type="button" id="fight-btn">FIGHT</button>
      <button type="button" id="sleep-btn">SLEEP</button>
    </div>

    </div>

    <div id="right-row">
      <div id="play" class="quad">PLAY VAR FUN</div>
      <div id="sleep" class="quad">SLEEP VAR ENERGY</div>
    </div>

  </div>`;

  renderToDom('#app', domString);
};

export default initialScreen;
