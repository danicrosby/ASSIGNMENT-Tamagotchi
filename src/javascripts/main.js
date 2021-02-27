import '../styles/main.scss';
import initialScreen from './initialScreen';
import eatCard from './eat';
import playCard from './play';

const init = () => {
  initialScreen();
  eatCard();
  playCard();
};

init();
