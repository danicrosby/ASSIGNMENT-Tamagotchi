
import renderToDom from './helpers.js/renderToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
  `;

  renderToDom('body', domString);
};

export default initialScreen;
