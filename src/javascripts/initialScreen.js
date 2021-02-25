import renderToDom from './helpers.js/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
    <div id="btn-container></div>
      <div id="top">
        <div><button type="button" id="play-btn">PLAY</button></div>
      </div>

      <div id="bottom">
        <div><button type="button" id="eat-btn">EAT</button></div>
        <div><button type="button" id="fight-btn">FIGHT</button></div>
        <div><button type="button" id="sleep-btn">SLEEP</button></div>
    </div>`;

  renderToDom('#app', domString);
};

export default initialScreen;
