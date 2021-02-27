import '../styles/main.scss';
import initialScreen from './initialScreen';
import eatCard from './eat';
import playCard from './play';
import fightCard from './fight';
import sleepCard from './sleep';

const init = () => {
  initialScreen();
  eatCard();
  playCard();
  fightCard();
  sleepCard();
};

init();
