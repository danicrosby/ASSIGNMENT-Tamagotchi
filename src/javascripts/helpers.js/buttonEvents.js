import { feedHealthyFood, feedUnHealthyFood } from '../eat';

const buttonEvents = () => {
  document.querySelector('#eat-healthy-btn').addEventListener('click', feedHealthyFood);
  document.querySelector('#eat-unhealthy-btn').addEventListener('click', feedUnHealthyFood);
};

export default buttonEvents;
