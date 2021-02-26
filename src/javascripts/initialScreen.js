import renderToDom from './helpers.js/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
  `;

  renderToDom('#app', domString);
};

export default initialScreen;
