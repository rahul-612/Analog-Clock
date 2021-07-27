setInterval(() => {
    date=new Date();

    hourTime=date.getHours();
    minuteTime=date.getMinutes();
    secondTime=date.getSeconds();

    hrotation=30*hourTime+minuteTime/2;
    mrotation=6*minuteTime;
    srotation=6*secondTime;

    hour.style.transform=  `rotate(${hrotation}deg)`;
    minute.style.transform=  `rotate(${mrotation}deg)`;
    second.style.transform=  `rotate(${srotation}deg)`;
}, 1000);