// const refs = {
//     clockface: document.querySelector('#timer-1'),
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     mins: document.querySelector('span[data-value="mins"]'),
//     secs: document.querySelector('span[data-value="secs"]'),

// };



class CountdownTimer{
 constructor ({rootSelector, targetDate}) {
     this.rootSelector = this._getRefs(rootSelector);
     this.targetDate = targetDate;
    }

    _getRefs(selector) {
        const refs = {};

        refs.days = document.querySelector(`${selector} span[data-value="days"]`);
        refs.hours = document.querySelector(`${selector} span[data-value="hours"]`);
        refs.mins = document.querySelector(`${selector} span[data-value="mins"]`);
        refs.secs = document.querySelector(`${selector} span[data-value="secs"]`);
    }
    
 intevalId = setInterval(() => {
const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    const timeComponent = this.getTimeComponents(time);
    console.log(timeComponent);
    // updateTimeFace(timeComponent);
 }, 1000);
    
 getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return  { days, hours, mins, secs } ;
    }
    
 pad(value) {
    return String(value).padStart(2, '0');
    }
    
};


// function updateTimeFace({ days, hours, mins, secs }) {
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
// }

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2020'),
});
const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Dec 17, 2020'),
});