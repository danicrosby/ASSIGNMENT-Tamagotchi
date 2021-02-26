import renderToDom from './helpers/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
  `;

  renderToDom('#app', domString);
};

export default initialScreen;
