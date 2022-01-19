/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
export default class Time {
  show = () => {
    setInterval(() => {
      const dt = luxon.DateTime.now();
      const time = document.querySelector('.time');
      time.innerHTML = `${dt.toLocaleString(
        luxon.DateTime.DATETIME_MED_WITH_SECONDS
      )}`;
    }, 1);
  };
}
