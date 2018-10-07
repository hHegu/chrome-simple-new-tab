const getTime = () => {
    const date = new Date();
    return (
        `${harold(date.getHours())}:${harold(date.getMinutes())}:${harold(date.getSeconds())}`
    );
}

const displayTime = () => {
    document.getElementById('clock').innerHTML = getTime()
}

const harold = (value) => {
    return value < 10 ? '0' + value : value;
}

const onPageLoad = () => {
    displayTime();
}

setInterval(displayTime, 1000);
window.onload = onPageLoad;