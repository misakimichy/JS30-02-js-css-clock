const setDate = () => {
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour');
    
    // second
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minute
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    //hour
    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 6) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    [secondHand, minuteHand, hourHand].forEach(element =>
        element.style.transition = (seconds === 0) ? 'none': null);
};

(function(){
    setInterval(setDate, 1000);
}());