const refs = {
    clockface: document.querySelector('#timer-1'),
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),

};



// class CountdownTimer{
//  constructor (targetDate, selector) {
//      this.selector = selector;
//      this.targetDate = targetDate;
//  }
// };

const timer = {}


setInterval(() => {
const targetDate = new Date('Nov 17, 2020');
const currentDate = Date.now();
    const time = targetDate - currentDate;
    const timeComponent = getTimeComponents(time);
    console.log(timeComponent);
    updateTimeFace(timeComponent);
}, 1000);




function getTimeComponents(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return  { days, hours, mins, secs } ;
    
}


function pad(value) {
    return String(value).padStart(2, '0');
  }

function updateTimeFace({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}

