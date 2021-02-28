import renderToDom from './helpers/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
    <div id="quad-container">

    <div id="left-row">
      <div id="eat" class="quad"></div>
      <div id="fight" class="quad"></div>
    </div>
    <div id="right-row">
      <div id="play" class="quad"></div>
      <div id="sleep" class="quad"></div>
    </div>
  </div>`;

  renderToDom('#app', domString);
};

export default initialScreen;
