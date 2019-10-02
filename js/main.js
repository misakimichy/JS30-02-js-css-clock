const setDate = () => {
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour');
    
    // second
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minute
    const minutes = now.getMinutes();
    const minutesDegree = minutes * 6;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    //hour
    const hours = now.getHours();
    const hoursDegree = hours * 30;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
};

(function(){
    setInterval(setDate, 1000);
}());