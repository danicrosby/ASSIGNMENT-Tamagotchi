import '../styles/main.scss';
import initialScreen from './initialScreen';
import eatCard from './eat';
import playCard from './play';
import fightCard from './fight';

const init = () => {
  initialScreen();
  eatCard();
  playCard();
  fightCard();
};

init();
