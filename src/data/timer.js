// const refs = {
//     clockface: document.querySelector('#timer-1'),
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     mins: document.querySelector('span[data-value="mins"]'),
//     secs: document.querySelector('span[data-value="secs"]'),

// };



class CountdownTimer{
 constructor ({rootSelector, targetDate}) {
    this.targetDate = targetDate;
    this._refs = this._getRefs(rootSelector);
    }

    _getRefs(selector) {
        const refs = {};

        refs.days = document.querySelector(`${selector} [data-value="days"]`);
        refs.hours = document.querySelector(`${selector} [data-value="hours"]`);
        refs.mins = document.querySelector(`${selector} [data-value="mins"]`);
        refs.secs = document.querySelector(`${selector} [data-value="secs"]`);
       return refs;
        
    }
    
 intevalId = setInterval(() => {
const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    const timeComponent = this.getTimeComponents(time);
    console.log(timeComponent);
    this.updateTimeFace(timeComponent);
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

    
 updateTimeFace({ days, hours, mins, secs }) {
    this._refs.days.textContent = `${days}`;
    this._refs.hours.textContent = `${hours}`;
    this._refs.mins.textContent = `${mins}`;
    this._refs.secs.textContent = `${secs}`;
}
};



const timer1 = new CountdownTimer({
  rootSelector: '#timer-1',
  targetDate: new Date('Nov 17, 2020'),
});
const timer2 = new CountdownTimer({
  rootSelector: '#timer-2',
  targetDate: new Date('Dec 17, 2020'),
});

// console.log(timer1);
// // console.log(timer2);