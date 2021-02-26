import renderToDom from './helpers.js/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
  <div id="quad-container">
  
    <div id="left-row">
      <div id="play" class="quad">PLAY</div>
      <div id="eat" class="quad">EAT</div>
    </div>
    <div id="right-row">
      <div id="fight" class="quad">FIGHT</div>
      <div id="sleep" class="quad">SLEEP</div>
    </div>
  </div>`;

  renderToDom('#app', domString);
};

export default initialScreen;

// <div id="btn-container></div>
// <div id="top">
//   <div><button type="button" id="play-btn">PLAY</button></div>
// </div>

// <div id="bottom">
//   <button type="button" id="eat-btn"> EAT </button>
//   <button type="button" id="fight-btn">FIGHT</button>
//   <button type="button" id="sleep-btn">SLEEP</button>
// </div>
