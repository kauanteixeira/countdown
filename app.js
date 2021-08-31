const containerTime = document.querySelector('#countdown');
const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');
const spinner = document.querySelector('#spinner');

const currentYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${currentYear} 00:00:00`);

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
  daysContainer.textContent = getTimeUnit(days);
  hoursContainer.textContent = getTimeUnit(hours);
  minutesContainer.textContent = getTimeUnit(minutes);
  secondsContainer.textContent = getTimeUnit(seconds);
}

const updateCountDown = () => {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  const days = Math.floor(difference / 1000 / 60 / 60 /24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountdownValues({ days, hours, minutes, seconds })
}

const showCountdown = () => {
  spinner.remove();
  containerTime.style.display = 'flex';
}

setTimeout(showCountdown, 1000);
setInterval(updateCountDown, 1000);